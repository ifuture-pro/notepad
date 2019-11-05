/**
 *  时间格式化的方法
*/

// 将时间格式化成 YYYY/MM/DD HH:mm:SS
export const fromatDateTime = (time) => {
  const date = new Date(time)
  const Y = date.getFullYear()
  const M = date.getMonth() + 1
  const D = date.getDate()
  let H = date.getHours()
  H = H > 9 ? H : '0' + H
  let m = date.getMinutes()
  m = m > 9 ? m : '0' + m
  let S = date.getSeconds()
  S = S > 9 ? S : '0' + S

  let result =  Y + '/' + M + '/' + D;
  if (H > 0 && m >0 && S >0) {
    result += ' ' + H + ':' + m + ':' + S
  }
  if (result.indexOf("NaN") != -1) {
    return time;
  }
  return result;

}
