var CourseMedia = function(data){
  return <img src={data.image} alt="cover" />;
} 
var NewLabel = function(data){
  return data.is_new? <span className="label label-default">Nowy!</span> : null;
} 
var CoursePromoLabel = function(data){
  return data.is_promo? <b>Kurs jest w promocji!</b> : null;
} 
var CourseActions = function(data){
  return (
    <div className="btn-group pull-right">
      <button className="btn btn-default">Szczegóły</button>
      <button className="btn btn-default">Dodaj do ulubionych</button>
      <button className="btn btn-default">Dodaj do koszyka</button>
    </div>
  )
} 
var CourseDetails = function(data){
  return (
    <table className="table course_details">
      <tbody>
        <tr>
          <th>Autor</th>
          <td>{data.author}</td>
        </tr>
        <tr>
          <th>Czas trwania</th>
          <td>{data.duration}</td>
        </tr>
      </tbody>
    </table>
  )
} 
var Course = function(data){
  return (
    <div className="media course">
      {/* Course media column */}
      <div className="media-left">
        {CourseMedia(data)}
      </div>
      {/* Course content column */}
      <div className="media-body">
        <h3>{data.title} {NewLabel(data)}</h3>
        <p>{data.description}</p>
        {/* Promotion */}
        {CoursePromoLabel(data)}
        {/* Course Actions */}
        {CourseActions(data)}
      </div>
      {/* Course details column */}
      <div className="media-right">
        {CourseDetails(data)}
      </div>
    </div>
  )
} 
var CourseList = function(list){
  return (
    <div>
      {list.map(function(data){
        return <div key={data.id}>{Course(data)}</div>
      })}
    </div>
  )
}
var list = courses_data.slice(0,3);
ReactDOM.render(CourseList(list), document.getElementById('root'))