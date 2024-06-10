<script setup lang="ts">
import { sendMessage } from '@qatium/sdk/ui';
import { MessageToEngine } from '@/communication/messages.ts';
import { useSelectedElement } from './useSelectedElement.ts';

const selectedElement = useSelectedElement();

const closeValve = (valveId: string) => {
    sendMessage<MessageToEngine>({
        event: 'close-valve',
        valveId
    });
};
</script>

<template>
    <button v-if="selectedElement" @click="closeValve(selectedElement.id)">
        Close selected valve
    </button>
    <p v-else>First select a valve</p>
</template>

<style scoped>
h1 {
    font-size: 18px;
    font-weight: 700;
    height: 27px;
}

p {
    margin: 0;
    height: 2em;
}

button {
    background-color: rgb(60, 93, 219);
    color: rgb(255, 255, 255);
    border: 0;
    border-radius: 4px;
    height: 2em;
}

button:hover {
    background-color: #6882e2;
}
</style>
