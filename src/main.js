import plugin from '../plugin.json';
const themes = acode.require('themes');
const ThemeBuilder = acode.require('themeBuilder');

class gitDust {

  async init() {
    try{
      const gitDust = new ThemeBuilder('Git Dust','dark');
      gitDust.primaryColor = '#24292e';
      gitDust.darkenedPrimaryColor = '#24292e';
      gitDust.primaryTextColor = '#ffffff';
      gitDust.secondaryColor = '#1c2128';
      gitDust.secondaryTextColor = '#8b949e';
      gitDust.activeColor = '#0D8CFF';
      gitDust.activeIconColor = '#0366d6';
      gitDust.linkTextColor = '#0366d6';
      gitDust.errorTextColor = '#f97583';
      gitDust.borderColor = '#30363d';
      gitDust.borderRadius = '6px';
      gitDust.popupBorderRadius = '6px';
      gitDust.popupIconColor = '#ffffff';
      gitDust.popupBackgroundColor = '#24292e';
      gitDust.popupTextColor = '#ffffff';
      gitDust.popupActiveColor = '#0366d6';
      gitDust.popupBorderColor = '#30363d';
      gitDust.boxShadowColor = 'rgba(0, 0, 0, 0.2)';
      gitDust.scrollbarColor = '#30363d';
      gitDust.buttonActiveColor = '#0366d6';
      gitDust.buttonBackgroundColor = '#0366d6';
      gitDust.buttonTextColor = '#ffffff';
      themes.add(gitDust);
      themes.apply("Git Dust");
    }catch(err){
      acode.alert("Error",err);
    }
  }

    async destroy() {
        
    }
}

if (window.acode) {
    const acodePlugin = new gitDust();
    acode.setPluginInit(plugin.id, (baseUrl, $page, {
        cacheFileUrl, cacheFile
    }) => {
        if (!baseUrl.endsWith('/')) {
            baseUrl += '/';
        }
        acodePlugin.baseUrl = baseUrl;
        acodePlugin.init($page, cacheFile, cacheFileUrl);
    });
    acode.setPluginUnmount(plugin.id, () => {
        acodePlugin.destroy();
    });
}