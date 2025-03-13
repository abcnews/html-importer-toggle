import acto from '@abcnews/alternating-case-to-object';
import { whenOdysseyLoaded } from '@abcnews/env-utils';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import App from './components/App.svelte';

whenOdysseyLoaded.then(() => {
  const mounts = selectMounts('togglehtmlimporter');

  mounts.forEach(mount => {
    mount.classList.add('u-full');
    const mountProps = acto(getMountValue(mount));

    if (mountProps.foldername && mountProps.htmlname) {
      new App({
        target: mount,
        props: {
          ...mountProps
        }
      });
    } else {
      console.error('Missing foldername or htmlname');
    }
  });
});

if (process.env.NODE_ENV === 'development') {
  console.debug(`[ai2html-toggle] public path: ${__webpack_public_path__}`);
}
