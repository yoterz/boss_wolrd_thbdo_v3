const timestart = require("./thtime")
const databoss = require("./databoss")

module.exports = function() {

    var day = timestart().day
    var h = timestart().h
    switch (day) {
    /*อาทิตย์*/   case 0 :
                  if (h == 0 && m < 15){                          //< 00.15 น
                    return{
                             boss : databoss.day0.b00[0],         
                             t : '00:15',
                             imgboss : databoss.day0.b00[1] }
                  }else if (h == 0 && m >= 15){                   //> 00.15 น - 01.00 น
                    return{
                             boss : databoss.day0.b00[0],         
                             t : '00:15',
                             imgboss : databoss.day0.b00[1] }
                  }else if (h >= 1 && h < 10){
                    return{
                             boss : databoss.day0.b10[0],
                             t : '10:00',
                             imgboss : databoss.day0.b10[1] }
                  }else if (h >= 10 && h < 14){
                    return{
                             boss : databoss.day0.b14[0],
                             t : '14:00',
                             imgboss : databoss.day0.b14[1] }
                  }else if (h >= 14 && h < 18){
                    return{
                             boss : databoss.day0.b18[0],
                             t : '18:00',
                             imgboss : databoss.day0.b18[1] }
                  }else if (h >= 18 && h < 24) {
                    return{
                             boss : databoss.day1.b00[0],         //ตัวของเช้าวัน  จันทร์
                             t : '00:15',
                             imgboss : databoss.day1.b00[1] }
                  }
                  break   
    /*จันทร์*/    case 1:
                if (h == 0 && m < 15){                          //< 00.15 น
                    return{
                             boss : databoss.day1.b00[0],         
                             t : '00:15',
                             imgboss : databoss.day1.b00[1] }
                  }else if (h == 0 && m >= 15){                   //> 00.15 น - 01.00 น
                    return{
                             boss : databoss.day1.b00[0],         
                             t : '00:15',
                             imgboss : databoss.day1.b00[1] }
                  }else if (h >= 1 && h < 10){
                    return{
                             boss : databoss.day1.b10[0],
                             t : '10:00',
                             imgboss : databoss.day1.b10[1] }
                  }else if (h >= 10 && h < 14){
                    return{
                             boss : databoss.day1.b14[0],
                             t : '14:00',
                             imgboss : databoss.day1.b14[1] }
                  }else if (h >= 14 && h < 18){
                    return{
                             boss : databoss.day1.b18[0],
                             t : '18:00',
                             imgboss : databoss.day1.b18[1] }
                  }else if (h >= 18 && h < 24) {
                    return{
                             boss : databoss.day2.b00[0],          //ตัวของเช้าวัน  อังคาร
                             t : '00:15',
                             imgboss : databoss.day2.b00[1] }
                  }
                  break
    /*อังคาร*/   case 2:
                  if (h == 0 && m < 15){                          //< 00.15 น
                    return{
                             boss : databoss.day2.b00[0],         
                             t : '00:15',
                             imgboss : databoss.day2.b00[1] }
                  }else if (h == 0 && m >= 15){                   //> 00.15 น - 01.00 น
                    return{
                             boss : databoss.day2.b00[0],         
                             t : '00:15',
                             imgboss : databoss.day2.b00[1] }   
                  }else if (h >= 1 && h < 10){                      //1.00 - 10.00
                    return{
                             boss : databoss.day2.b10[0],
                             t : '10:00',
                             imgboss : databoss.day2.b10[1] }
                  }else if (h >= 10 && h < 14){
                    return{
                             boss : databoss.day2.b14[0],
                             t : '14:00',
                             imgboss : databoss.day2.b14[1] }
                  }else if (h >= 14 && h < 18){
                    return{
                             boss : databoss.day2.b18[0],
                             t : '18:00',
                             imgboss : databoss.day2.b18[1] }
                  }else if (h >= 18 && h < 24) {
                    return{
                             boss : databoss.day3.b00[0],           //ตัวของเช้าวัน  พุธ
                             t : '00:15',
                             imgboss : databoss.day3.b00[1] }
                  }
                  break
    /*พุธ*/      case 3 :
                  if (h == 0 && m < 15){                          //< 00.15 น
                    return{
                             boss : databoss.day3.b00[0],         
                             t : '00:15',
                             imgboss : databoss.day3.b00[1] }
                  }else if (h == 0 && m >= 15){                   //> 00.15 น - 01.00 น
                    return{
                             boss : databoss.day3.b00[0],         
                             t : '00:15',
                             imgboss : databoss.day3.b00[1] }
                  }else if (h >= 1 && h < 10){
                    return{
                             boss : databoss.day3.b10[0],
                             t : '10:00',
                             imgboss : databoss.day3.b10[1] }
                  }else if (h >= 10 && h < 14){
                    return{
                             boss : databoss.day3.b14[0],
                             t : '14:00',
                             imgboss : databoss.day3.b14[1] }
                  }else if (h >= 14 && h < 18){
                    return{
                             boss : databoss.day3.b18[0],
                             t : '18:00',
                             imgboss : databoss.day3.b18[1] }
                  }else if (h >= 18 && h < 24) {
                    return{
                             boss : databoss.day4.b00[0],           //ตัวของเช้าวัน  พฤ
                             t : '00:15',
                             imgboss : databoss.day4.b00[1] }
                  }
                  break
    /*พฤ*/      case 4 :
                  if (h == 0 && m < 15){                          //< 00.15 น
                    return{
                             boss : databoss.day4.b00[0],         
                             t : '00:15',
                             imgboss : databoss.day4.b00[1] }
                  }else if (h == 0 && m >= 15){                   //> 00.15 น - 01.00 น
                    return{
                             boss : databoss.day4.b00[0],         
                             t : '00:15',
                             imgboss : databoss.day4.b00[1] }
                  }else if (h >= 1 && h < 10){
                    return{
                             boss : databoss.day4.b10[0],
                             t : '10:00',
                             imgboss : databoss.day4.b10[1] }
                  }else if (h >= 10 && h < 14){
                    return{
                             boss : databoss.day4.b14[0],
                             t : '14:00',
                             imgboss : databoss.day4.b14[1] }
                  }else if (h >= 14 && h < 18){
                    return{
                             boss : databoss.day4.b18[0],
                             t : '18:00',
                             imgboss : databoss.day4.b18[1] }
                  }else if (h >= 18 && h < 24) {
                    return{
                             boss : databoss.day5.b00[0],           //ตัวของเช้าวัน ศุกร์
                             t : '00:15',
                             imgboss : databoss.day5.b00[1] }
                  }
                  break
    /*ศุกร์*/     case 5 :
                  if (h == 0 && m < 15){                          //< 00.15 น
                    return{
                             boss : databoss.day5.b00[0],         
                             t : '00:15',
                             imgboss : databoss.day5.b00[1] }
                  }else if (h == 0 && m >= 15){                   //> 00.15 น - 01.00 น
                    return{
                             boss : databoss.day5.b00[0],         
                             t : '00:15',
                             imgboss : databoss.day5.b00[1] }
                  }else if (h >= 1 && h < 10){
                    return{
                             boss : databoss.day5.b10[0],
                             t : '10:00',
                             imgboss : databoss.day5.b10[1] }
                  }else if (h >= 10 && h < 14){
                    return{
                             boss : databoss.day5.b14[0],
                             t : '14:00',
                             imgboss : databoss.day5.b14[1] }
                  }else if (h >= 14 && h < 18){
                    return{
                             boss : databoss.day5.b18[0],
                             t : '18:00',
                             imgboss : databoss.day5.b18[1] }
                  }else if (h >= 18 && h < 24) {
                    return{
                             boss : databoss.day6.b00[0],           //ตัวของเช้าวัน  เสาร์
                             t : '00:15',
                             imgboss : databoss.day6.b00[1] }
                  }
                  break
    /*เสาร์*/     case 6 :
                  if (h == 0 && m < 15){                          //< 00.15 น
                    return{
                             boss : databoss.day6.b00[0],         
                             t : '00:15',
                             imgboss : databoss.day6.b00[1] }
                  }else if (h == 0 && m >= 15){                   //> 00.15 น - 01.00 น
                    return{
                             boss : databoss.day6.b00[0],         
                             t : '00:15',
                             imgboss : databoss.day6.b00[1] }
                  }else if (h >= 1 && h < 10){
                    return{
                             boss : databoss.day6.b10[0],
                             t : '10:00',
                             imgboss : databoss.day6.b10[1] }
                  }else if (h >= 10 && h < 14){
                    return{
                             boss : databoss.day6.b14[0],
                             t : '14:00',
                             imgboss : databoss.day6.b14[1] }
                  }else if (h >= 14 && h < 18){
                    return{
                             boss : databoss.day6.b18[0],
                             t : '18:00',
                             imgboss : databoss.day6.b18[1] }
                  }else if (h >= 18 && h < 24) {
                    return{
                             boss : databoss.day0.b00[0],           //ตัวของเช้าวัน  อาทิต
                             t : '00:15',
                             imgboss : databoss.day0.b00[1] }
                  }
                  break
    
              }
    }
