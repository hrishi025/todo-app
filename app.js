'use strict';

var items = [];

var markItemComplete = function markItemComplete(itemToRemove) {
    // remove the item from items array
    // for (let index = 0; index < items.length; index++) {
    //   const item = items[index]
    //   if (item.id == itemToRemove.id) {
    //     // found the item to be deleted
    //     items.splice(index, 1)
    //     break
    //   }
    // }

    items = items.filter(function (item) {
        return item.id != itemToRemove.id;
    });
    render();
};

var addItem = function addItem(e) {
    e.preventDefault();
    items.push({
        id: items.length + 1,
        status: 'open',
        title: e.target.elements.itemtext.value
    });

    // clear the input
    e.target.elements.itemtext.value = '';
    e.preventDefault();

    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { className: 'title' },
            React.createElement(
                'h2',
                null,
                'TO-DO APP'
            ),
            React.createElement(
                'p',
                null,
                'What do you want to do today'
            )
        ),
        React.createElement(
            'div',
            { className: 'add-todo' },
            React.createElement(
                'form',
                { onSubmit: addItem },
                React.createElement(
                    'div',
                    { className: 'input-group mb-3' },
                    React.createElement('textarea', {
                        className: 'form-control',
                        palceholder: 'Enter your todo item here',
                        rows: '3',
                        name: 'itemtext' }),
                    React.createElement(
                        'button',
                        { className: 'btn btn-success', type: 'submit' },
                        'ADD'
                    )
                )
            )
        ),

        //if there is any todo item then only show this div
        items.length > 0 && React.createElement(
            'div',
            { className: 'items-list' },
            items.map(function (item) {
                return React.createElement(
                    'div',
                    { className: 'item' },
                    React.createElement(
                        'div',
                        { 'class': 'input-group mb-3' },
                        React.createElement('input', { readOnly: true, type: 'text', 'class': 'form-control', value: item.title }),
                        React.createElement(
                            'button',
                            {
                                'class': 'btn btn-danger',
                                id: 'button-addon2',
                                onClick: function onClick() {
                                    markItemComplete(item);
                                } },
                            'Complete'
                        )
                    )
                );
            })
        ),
        React.createElement(
            'div',
            { className: 'footer' },
            'Developed with \uD83D\uDC97 by hrishi025'
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();
