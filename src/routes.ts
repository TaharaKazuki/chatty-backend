import { Application } from 'express'

export default (app: Application) => {
  const routes = () => {
    console.info(app)
  }
  routes()
}
