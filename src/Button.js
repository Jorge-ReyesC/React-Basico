import PropTypes from 'prop-types';

export function Button({text, name ='User'}) {
    console.log(text)
    // if (!text) {
    //     console.error('text is required')
    // }

  return <button onClick={function(){
    console.log('click');
  }} >
    {text}- {name}
    </button>;
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'Some User'
}