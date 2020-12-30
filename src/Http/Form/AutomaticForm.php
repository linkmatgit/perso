<?php

namespace App\Http\Form;

use App\Core\Type\DateTimeType;
use App\Core\Type\EditorType;
use App\Core\Type\SwitchType;
use App\Domain\Auth\User;
use App\Domain\Blog\Entity\Category;
use App\Http\Admin\Form\Field\CategoryFormType;
use App\Http\Admin\Form\Field\UserChoiceType;
use DateTimeInterface;
use ReflectionClass;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

/**
 * Génère un formulaire de manière automatique en lisant les propriété d'un objet.
 */
class AutomaticForm extends AbstractType
{
    const TYPES = [
      'string' => TextType::class,
      'int' => NumberType::class,
      'float' => NumberType::class,
      'bool' => SwitchType::class,
      DateTimeInterface::class => DateTimeType::class,
      User::class => UserChoiceType::class,
      Category::class => CategoryFormType::class

    ];

    const NAMES = [
      'description' => EditorType::class,
      'short' => TextareaType::class,
      'color' => ColorType::class,
      'links' => TextareaType::class,
      'content' => EditorType::class
    ];

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $data = $options['data'];
        $refClass = new ReflectionClass($data);
        $classProperties = $refClass->getProperties(\ReflectionProperty::IS_PUBLIC);
        foreach ($classProperties as $property) {
            $name = $property->getName();
          /** @var \ReflectionNamedType|null $type */
            $type = $property->getType();
            if (null === $type) {
                return;
            }
          // Input spécifique au niveau
            if (array_key_exists($name, self::NAMES)) {
                $builder->add($name, self::NAMES[$name], [
                'required' => false,
                ]);
            } elseif (array_key_exists($type->getName(), self::TYPES)) {
                $builder->add($name, self::TYPES[$type->getName()], [
                'required' => !$type->allowsNull() && 'bool' !== $type->getName(),
                ]);
            } else {
                throw new \RuntimeException(sprintf('Impossible de trouver le champs associé au type %s dans %s::%s', $type->getName(), get_class($data), $name));
            }
        }
    }
}
