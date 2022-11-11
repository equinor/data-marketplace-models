import type { User } from "./User"
import type { Role } from "./Role"

export interface Maintainer extends User {
  role: Role
}
