import { mount } from '@vue/test-utils';
import App from './App.vue';
import { AssetTypes } from '@qatium/sdk';
import { nextTick } from 'vue';

describe('UI', () => {
    it('on selected element', async () => {
        const wrapper = mount(App);
        expect(wrapper.text()).toContain('First select a valve')

        window.dispatchEvent(
            new MessageEvent('message', {
                data: {
                    source: 'qatium',
                    type: 'message',
                    payload: {
                        event: 'selected-element',
                        selectedElement: {
                            id: 'V1',
                            type: AssetTypes.VALVE
                        }
                    }
                }
            })
        );

        await nextTick()
        expect(wrapper.text()).toContain('Close selected valve')
    });
});
