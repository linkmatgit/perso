/**
 * Vérifie si l'utilisateur est admin
 *
 * @return {boolean}
 */
export function isAdmin () {
  return window.linkmat.ADMIN === true
}

/**
 * Vérifie si l'utilisateur est connecté
 *
 * @return {boolean}
 */
export function isAuthenticated () {
  return window.linkmat.USER !== null
}

/**
 * Vérifie si l'utilisateur est connecté
 *
 * @return {boolean}
 */
export function lastNotificationRead () {
  return window.linkmat.NOTIFICATION
}

/**
 * Renvoie l'id de l'utilisateur
 *
 * @return {number|null}
 */
export function getUserId () {
  return window.linkmat.USER
}

/**
 * Vérifie si l'utilisateur connecté correspond à l'id passé en paramètre
 *
 * @param {number} userId
 * @return {boolean}
 */
export function canManage (userId) {
  if (isAdmin()) {
    return true
  }
  if (!userId) {
    return false
  }
  return window.linkmat.USER === parseInt(userId, 10)
}
