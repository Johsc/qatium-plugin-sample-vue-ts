import { Ref, ref, watchEffect } from 'vue';
import { onMessage } from '@qatium/sdk/ui';
import { AssetTypes } from '@qatium/sdk';
import { MessageToUI, SelectedElement } from '@/communication/messages.ts';

export const useSelectedElement = () => {
    const selectedElement: Ref<SelectedElement | undefined> = ref(undefined);

    watchEffect(() => {
        onMessage<MessageToUI>((msg) => {
            if (msg.event !== 'selected-element') {
                return;
            }

            if (!msg.selectedElement) {
                selectedElement.value = undefined;
            }

            if (msg.selectedElement?.type === AssetTypes.VALVE) {
                selectedElement.value = msg.selectedElement;
            }
        });
    });

    return selectedElement;
};
