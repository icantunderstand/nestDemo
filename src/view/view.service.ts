import { Injectable, OnModuleInit } from '@nestjs/common'
import next from 'next'
import { PROJECT_PTRFIX } from '../constants'

@Injectable()
export class ViewService implements OnModuleInit {
  private server: any

  async onModuleInit(): Promise<void> {
    try {
      this.server = next({ dev: true, dir: './src/client', conf: { basePath: `/${PROJECT_PTRFIX}/page` } })
      await this.server.prepare()
    } catch (error) {
      console.log(error)
    }
  }

  getNextServer(): any {
    return this.server
  }
}