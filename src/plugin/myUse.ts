import type { App } from "vue";
import { app } from '../main'

interface Install { install: (app: App, ...args: Array<any>) => void }

const new444 = <T extends Install>(plugin: T, ...args: Array<any>): void => {
    plugin?.install(app, ...args);
}

export default new444;