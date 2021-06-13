import { defaults, notice } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icon-fonts/iconfont/material-icons.css';

defaults.styling = 'material';
defaults.icons = 'material';

export { notice };
