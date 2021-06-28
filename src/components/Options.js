import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

function Options(props) {
  return (
    <section>
      <h2 className="title">OPTIONS</h2>
      <FormControlLabel
        className="show-completed"
        control={<Checkbox 
        icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} 
        name="checkedH" />}
        label="Show completed"
        onChange={e => props.setShowCompletedTodos(e.target.checked)}
        checked={props.showCompletedTodos}
      />
     
    </section>
  )
}

export default Options
