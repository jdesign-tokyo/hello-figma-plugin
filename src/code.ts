/// <reference types="@figma/plugin-typings" />

figma.showUI(__html__);

figma.on('run', () => {
  if (figma.currentPage.selection.length !== 1 || figma.currentPage.selection[0].type !== 'FRAME') {
    figma.closePlugin("frameを一つ選択した状態で再起動してください");
    return;
  }
});

figma.ui.onmessage = (msg) => {
  console.log('Message received:', msg); // デバッグメッセージ
  if (msg.type === 'greet') {
    figma.closePlugin('Hello, Figma');
  }
};