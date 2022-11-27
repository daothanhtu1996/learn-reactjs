import React, { useState } from "react";
import data from "../../../data.json"

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const uniqueSet = new Set(data);
  console.log('step1',uniqueSet)

  const backToArray = [...uniqueSet];

  console.log('step2',backToArray)

//   const array = data;

// Array.from(new Set(data));

// console.log('step3',array)

// const array = data;

// array.filter((item, index) => array.indexOf(item) !== index);

// console.log('step3',array)



  const listItems = backToArray
    .slice(0, 24)
    .map((backToArray) => <li>{backToArray}</li>);
  console.log("1", listItems);

  const items = listItems.slice(0, 18).map((listItems) => <li>{listItems}</li>);
  console.log("2", items);

  const detailItems = items.slice(1, 7).map((items) => <li>{items}</li>);
  console.log("3", detailItems);

  const a = [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12];

  let singleNumberArray = [];
  let total;

  a.forEach(
    (v) =>
      (singleNumberArray = singleNumberArray.concat(v.toString().split("")))
  );
  singleNumberArray = singleNumberArray.sort((a, b) => {
    return b - a;
  });
  total = singleNumberArray.join("");

  console.log(total);

  return (
    <div>
      <h3>
        2.Tạo 1 danh sách gồm 24 phần tử không trùng lặp nhau từ file JSON cho
        trước. . .
      </h3>
      <h3>Từ danh sách 24 phần tử </h3>
      <ul>{listItems}</ul>

      <h3>tạo ra 1 danh sách gồm 18 phần tử không trùng lặp</h3>
      <ul>{items}</ul>

      <h3>Từ 18 phần tử vừa lấy được tạo thành 1 danh sách gồm 6 phần tử</h3>
      <ul>{detailItems}</ul>

      
    </div>
  );
}

export default TodoFeature;
