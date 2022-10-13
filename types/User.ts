import type { Entity } from "./Entity"

export interface User extends Entity {
  /** The user's first name */
  firstName: string
  /** The user's last name */
  lastName: string
  /** The user's email address */
  email: string
}
