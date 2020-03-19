# quillEditorDemo
The Demo for Quill Editor

## install 
```
  npm i quill
```
Online DEMO:  https://quilljs.com/playground/

## Example
- Step 1: create DOM container with ID
- Step 2: excute create quill after DOM render;
```
  componentDidMount() {
    new Quill(document.querySelector('#editor'), {
      theme: 'snow'
    });
  };
```
- step 3: link the theme style
```
  <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
```

## Version
^1.3.7

## Advantage 
- Free and open source
- Lightweight

## Disadvantage
- Requires additional skin style loading (需要额外加载皮肤样式)
- Not support table
