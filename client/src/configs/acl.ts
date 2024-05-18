import { AbilityBuilder, Ability } from '@casl/ability'
import permissions from './permissions.json'

export type Subjects = string
export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete'

export type AppAbility = Ability<[Actions, Subjects]> | undefined

export const AppAbility = Ability as any
export type ACLObj = {
  action: Actions
  subject: string
}

/**
 * Please define your own Ability rules according to your app requirements.
 * We have just shown Admin and Client rules for demo purpose where
 * admin can manage everything and client can just visit ACL page
 */
// Xác định quy tắc dựa trên quyền của người dùng
const defineRulesFor = (permissionsIDs: number[]) => {
  const { can, rules } = new AbilityBuilder(AppAbility)

  if (Array.isArray(permissionsIDs)) {
    permissionsIDs.forEach(permissionID => {
      console.log('permissionID: ', permissionID)

      const permission = permissions.find(p => p.id === permissionID)
      console.log('permission: ', permission)

      if (permission) {
        can(permission.action, permission.subject)
      }
    })
  }

  return rules
}
export const buildAbilityFor = (role: string, subject: string): AppAbility => {
  return new AppAbility(defineRulesFor(role, subject), {
    // https://casl.js.org/v5/en/guide/subject-type-detection
    // @ts-ignore
    detectSubjectType: object => object!.type
  })
}

export const defaultACLObj: ACLObj = {
  action: 'manage',
  subject: 'all'
}

export default defineRulesFor
