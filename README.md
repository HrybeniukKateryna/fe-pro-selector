# fe-pro-selector
1.с
ffff
ffff
ffff
У нас есть функция ```selector```, которая находится в ```src/selector.js```. Функция принимает два аргумента, первый ```obj``` это объект, а ```path``` это массив с путем к объекту. Грубо говоря, если у нас есть объект ```
{
    filed: {
        check: 'test'
    }
}```
И значит если мы передадим этот объект и передадим массив строк, которые представляют путь к какому-то свойству. Для данного объекта это будет ```js ['filed', 'check'] ``` и по этому пути мы получим ```'test'``` строку. Если наш путь не существует, мы должны вернуть пустую строку, не должно быть ошибок в выполнении этой функции. Это сложное задание, всем удачи
