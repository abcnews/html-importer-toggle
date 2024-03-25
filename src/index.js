import acto from '@abcnews/alternating-case-to-object';
import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import App from './components/App.svelte';

let appMountEl;
let appProps;

whenOdysseyLoaded.then(() => {
  [appMountEl] = selectMounts('htmlimportertoggle');

  if (appMountEl) {
    appProps = acto(getMountValue(appMountEl));

    if (appProps.foldername && appProps.htmlname) {
      new App({
        target: appMountEl,
        props: {
          ...appProps
        }
      });
    } else {
      console.error('Missing foldername or htmlname');
    }
  }
});

if (process.env.NODE_ENV === 'development') {
  console.debug(`[ai2html-toggle] public path: ${__webpack_public_path__}`);
}
