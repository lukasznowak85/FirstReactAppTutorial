var React = require('react');

var AddNote = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    setRef: function(ref){
        this.note = ref;
    },
    handleSubmit: function(){
        var newNote = this.note.value;
        this.note.value = '';
        this.props.addNote(newNote);
    },
    render: function(){
        return (
            <div className="input-group">
                <input type="test" className="form-control" placeholder="Add note here" ref={this.setRef}/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.handleSubmit}>Add</button>
                </span>
            </div>
        )
    }
});

module.exports = AddNote;