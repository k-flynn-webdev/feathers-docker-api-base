// For more information about this file see https://dove.feathersjs.com/guides/cli/authentication.html
import { AuthenticationService, JWTStrategy } from '@feathersjs/authentication'
import { LocalStrategy } from '@feathersjs/authentication-local'
import { oauth, OAuthStrategy } from '@feathersjs/authentication-oauth'

class GitHubStrategy extends OAuthStrategy {
  async getEntityData(profile, existing, params) {
    const baseData = await super.getEntityData(profile, existing, params)
    const userData = {
      ...baseData,
      // The GitHub profile image
      // avatar: profile.avatar_url,
      // The user email address (if available)
      email: profile.email,
      name: profile.name
    }

    return userData
  }
}

export const authentication = (app) => {
  const authenticationInstance = new AuthenticationService(app)

  authenticationInstance.register('jwt', new JWTStrategy())
  authenticationInstance.register('local', new LocalStrategy())
  authenticationInstance.register('github', new GitHubStrategy())

  app.use('authentication', authenticationInstance)
  app.configure(oauth())
}
