export class Task {
  name: String = "";
  created_at: Date = new Date();
  description: String = "";

  constructor(aName:String, aDesc:String){
  	this.name = aName;
  	this.description = aDesc;
  	this.created_at = new Date();
  }
}
