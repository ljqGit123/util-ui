import Index from '../Index'
import AutoCode from '../autoTools/autoCreateCode/autoCode'
import SqlTable from '../autoTools/autoCreateCode/sqlTable'
import SqlTableDetail from '../autoTools/autoCreateCode/sqlTableDetail'
import ExcelUtil from '../fileTools/excelUtil/excelUtil'
import Lodop from '../fileTools/lodopUtil/lodopPrint'
import EncryptUtil from '../otherUtils/encryptUtil/encryptUtil';
import IpUtil from '../otherUtils/ipUtil/ipUtil';
import Bar from '../echarts/bar/bar';
import Pie from '../echarts/pie/pie';
import Category from '../echarts/category/category';
import MarkDown from '../markdown/markdown';
import UploadImage from  '../fileTools/imageUploadUtil/uploadImage';

export default [
  {
    path: '/',
    component: Index,
    name:"Index",
    children:[
      {
        path: '/autoCode',
        name: 'AutoCode',
        component: AutoCode
      },
      {
        path: '/sqlTable:dto',
        name: 'SqlTable',
        component: SqlTable
      },
      {
        path: '/excelUtil',
        name: 'ExcelUtil',
        component: ExcelUtil
      },
      {
        path: '/lodop',
        name: 'Lodop',
        component: Lodop
      },
      {
        path: '/encryptUtil',
        name: 'EncryptUtil',
        component: EncryptUtil
      },
      {
        path: '/ipUtil',
        name: 'IpUtil',
        component: IpUtil
      },
      {
        path: '/bar',
        name: 'bar',
        component: Bar
      },
      {
        path: '/pie',
        name: 'pie',
        component: Pie
      },
      {
        path: '/category',
        name: 'category',
        component: Category
      },
      {
        path: '/markDown',
        name: 'markDown',
        component: MarkDown
      },
      {
        path: '/uploadImage',
        name: 'uploadImage',
        component: UploadImage
      },
    ]
  },
  {
    path: '/tableDetail',
    component: SqlTableDetail,
    name:"SqlTableDetail",
  }
]
