import { ContactlessOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import data from "../../../data.json";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const uniqueSet = new Set(data);

  const backToArray = [...uniqueSet];

  var keys = backToArray[0];

  //vacate keys from main array
  var newArr = backToArray.slice(1, backToArray.length);

  var formatted = [],
  data = newArr,
  cols = keys,
  l = cols.length;
  for (var i=0; i < data.length; i++) {
          var d = data[i],
                  o = {};
          for (var j=0; j < l; j++)
                  o[cols[j]] = d[j];
          formatted.push(o);
  }
  console.log("sssssssss", formatted);

  // Lặp theo hàng
  for (var i = 0; i < backToArray.lenght; i++) {
    // Lặp theo cột, số cộ từ 0 -> số lượng phần tử của hàng i
    for (var j = 0; j < backToArray[i].length; j++) {
      console.log("aaaaaaaaaa", backToArray[i][j]);
    }
  }

  // var aa = backToArray,
  //   chunk;

  // while (aa.length > 0) {
  //   chunk = aa.splice(0, );

  //   console.log('chunk',chunk);
  // }

  //   const array = data;

  // Array.from(new Set(data));

  // console.log('step3',array)

  // const array = data;

  // array.filter((item, index) => array.indexOf(item) !== index);

  // console.log('step3',array)

  // console.log("listWithOnly3Items", listWithOnly24Items);
  const originalArr = backToArray;
  const splittedArray = [];
  while (originalArr.length > 0) {
    splittedArray.push(originalArr.splice(0, 24));
  }

  console.log("splittedArray", splittedArray);

  const list3 = originalArr;
  const listWithOnly3Items = list3.filter((element, index) => index < 3);
  console.log("1sssss", listWithOnly3Items);

  // const originalArr2 = splittedArray;
  // const splittedArray2 = [];
  // while (originalArr2.length > 0) {
  //   splittedArray2.push(originalArr2.splice(0, 18));
  // }

  const listItems = backToArray
    .slice(0, 24)
    .map((backToArray) => <li>{backToArray}</li>);

  // const items = listItems.slice(0, 18).map((listItems) => <li>{listItems}</li>);
  // console.log("2", items);

  // const detailItems = items.slice(1, 7).map((items) => <li>{items}</li>);
  // console.log("3", detailItems);

  const a = splittedArray.splice(0, 6);
  const b = splittedArray.splice(7, 6);

  const c = splittedArray.splice(11, 6);

  const table = new Array(6);

  table[0] = [a];

  console.log("table", table);
  // const a = [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12];

  // let singleNumberArray = [];
  // let total;

  // a.forEach(
  //   (v) =>
  //     (singleNumberArray = singleNumberArray.concat(v.toString().split("")))
  // );
  // singleNumberArray = singleNumberArray.sort((a, b) => {
  //   return b - a;
  // });
  // total = singleNumberArray.join("");

  const list = splittedArray;
  const listWithOnly24Items = list.filter(
    (element, index) => list.indexOf(index) < 7
  );
  console.log("listWithOnly24Itemssss", listWithOnly24Items);
  return (
    <div>
      {/* {splittedArray.map((items, index) => {
        return (
          <ol>
            {items.map((subItems, sIndex) => {
              return <li> {subItems} </li>;
            })}
          </ol>
        );
      })} */}

      <table>
        {/* <thead>
          <tr>
            {students[0].map((item, index) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead> */}
        <tbody>
          {splittedArray.slice(0, splittedArray.length).map((item, index) => {
            return (
              <tr>
                <td key={index[0]}>{item[0]}</td>
                <td key={index[1]}>{item[1]}</td>
                <td key={index[2]}>{item[2]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TodoFeature;
