/** @jsx React.DOM */

var React = require('react');

var Page = React.createClass({
    render: function () {
        return (
            <html>
                <head>
                </head>
                <body>
                    <div>
                        {this.props.children}
                    </div>
                    <script src="/static/bundle.js" />
                </body>
            </html>
        );
    }
});

module.exports = Page;