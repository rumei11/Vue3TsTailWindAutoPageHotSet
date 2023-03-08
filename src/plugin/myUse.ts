import type { App } from "vue";
import { app } from '../main'

interface Install { install11: (app: App, ...args: Array<any>) => void }

const imgDomimgDom = <T extends Install>(plugin: T, ...args: Array<any>): void => {
    plugin?.install(app, ...args);
}

export default imgDomimgDom;