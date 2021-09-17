export default ({post:{ userId, id, title, body }}) =>
  <fieldset class="post-card">
    <legend>post #{id}</legend>        
    <h4>{title}</h4>
    {body}
  </fieldset>