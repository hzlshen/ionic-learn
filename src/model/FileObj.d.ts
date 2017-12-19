export interface FileObj{
  id?:string;  //主键
  origPath?:string;  //原文件路径
  thumbPath?:string;  //缩略文件路径
  name?:string;  //名称
  createTime?:string; //创建时间
  size?:string;  //大小
  type?:string; //类型
  status?:string; //状态
  token?:string;
  base64:string;   //base64
  parameter?:string;  //自定义参数
}
