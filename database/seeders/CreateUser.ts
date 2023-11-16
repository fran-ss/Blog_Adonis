import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
export default class extends BaseSeeder {
  public async run() {
    await User.create({
      name: 'hadna',
      email: 'hadna@jady',
      password: 'secret',
    })
    // Write your database queries inside the run method
  }
}
