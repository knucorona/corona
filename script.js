
  //업데이트 시간
  var updateString = String(세계현황[3]);
  var month = updateString.substring(14,19);
  var day = updateString.substring(20,22);
  var year = updateString.substring(23,28);
  var hour = updateString.substring(30,32);
  var min = updateString.substring(33,35);

  var korHour = Number(hour) + 9;
  var korDay = Number(day);
  var korMonth = month;
  if (korMonth == 'March')
    korMonth = '3월';
  else if(korMonth == 'April')
    korMonth = '4월';
  else if(korMonth == 'May')
    korMonth = '5월'; 
  else if(korMonth == 'June')
    korMonth = '6월'; 

  if (korHour == 24){
    korHour = '00';
    korDay = korDay + 1;
  }
  else if(korHour > 24){
    korHour = korHour - 24;
    korDay = korDay + 1;
  }
  document.getElementById("Now").innerHTML = '(업데이트 : '+year+'년 '+korMonth+' '+korDay+'일, '+korHour+':'+min+')';

    //국내 현황
  document.getElementById("국내확진자").innerHTML = String(Number(국내현황[0]).toLocaleString());
  document.getElementById("국내완치자").innerHTML = String(Number(국내현황[2]).toLocaleString());
  document.getElementById("국내사망자").innerHTML = String(Number(국내현황[4]).toLocaleString());
  
  document.getElementById("국내확진자차이").innerHTML = String(국내현황[1]);
  document.getElementById("국내사망자차이").innerHTML = String(국내현황[3]);
  document.getElementById("국내완치자차이").innerHTML = String(국내현황[5]);

  //경북대 현황
  document.getElementById("경대확진자").innerHTML = String(경북대현황[0].toLocaleString());
  document.getElementById("경대사망자").innerHTML = String(경북대현황[1].toLocaleString());
  document.getElementById("경대완치자").innerHTML = String(경북대현황[2].toLocaleString());

  document.getElementById("경대확진자차이").innerHTML = '(+' + String(경북대현황[3].toLocaleString()) + ')';
  document.getElementById("경대사망자차이").innerHTML = '(+' + String(경북대현황[4].toLocaleString()) + ')';
  document.getElementById("경대완치자차이").innerHTML = '(+' + String(경북대현황[5].toLocaleString()) + ')';

  //지역별 확진자수
  document.getElementById("seoul").innerHTML = '<b>' + String(전국지역확진자[0].toLocaleString()) + '</b>';
  document.getElementById("busan").innerHTML = '<b>' + String(전국지역확진자[1].toLocaleString()) + '</b>';
  document.getElementById("daegu").innerHTML = '<b>' + String(전국지역확진자[2].toLocaleString()) + '</b>';
  document.getElementById("incheon").innerHTML = '<b>' + String(전국지역확진자[3].toLocaleString()) + '</b>';
  document.getElementById("gwangju").innerHTML = '<b>' + String(전국지역확진자[4].toLocaleString()) + '</b>';
  document.getElementById("daejeon").innerHTML = '<b>' + String(전국지역확진자[5].toLocaleString()) + '</b>';
  document.getElementById("ulsan").innerHTML = '<b>' + String(전국지역확진자[6].toLocaleString()) + '</b>';
  document.getElementById("sejong").innerHTML = '<b>' + String(전국지역확진자[7].toLocaleString()) + '</b>';
  document.getElementById("gyeong").innerHTML = '<b>' + String(전국지역확진자[8].toLocaleString()) + '</b>';
  document.getElementById("kangwon").innerHTML = '<b>' + String(전국지역확진자[9].toLocaleString()) + '</b>';
  document.getElementById("chbuk").innerHTML = '<b>' + String(전국지역확진자[10].toLocaleString()) + '</b>';
  document.getElementById("chnam").innerHTML = '<b>' + String(전국지역확진자[11].toLocaleString()) + '</b>';
  document.getElementById("jnbuk").innerHTML = '<b>' + String(전국지역확진자[12].toLocaleString()) + '</b>';
  document.getElementById("jnnam").innerHTML = '<b>' + String(전국지역확진자[13].toLocaleString()) + '</b>';
  document.getElementById("kybuk").innerHTML = '<b>' + String(전국지역확진자[14].toLocaleString()) + '</b>';
  document.getElementById("kynam").innerHTML = '<b>' + String(전국지역확진자[15].toLocaleString()) + '</b>';
  document.getElementById("jeju").innerHTML = '<b>' + String(전국지역확진자[16].toLocaleString()) + '</b>';

  document.getElementById("others").innerHTML = '<b>' + String(맵_지역확진자[17].확진자.toLocaleString()) + '</b>';
  document.getElementById("sum").innerHTML = '<b>' +String(국내현황[0].toLocaleString()) + '</b>';

  // 검사자수
  document.getElementById("결과음성").innerHTML = String(검사자현황[0].toLocaleString());
  document.getElementById("검사중").innerHTML = String(검사자현황[1].toLocaleString());
  document.getElementById("결과합계").innerHTML = String((검사자현황[0] + 검사자현황[1]).toLocaleString());

  // 세계현황
  document.getElementById("quickInfect").innerHTML = String(세계현황[0].toLocaleString());
  document.getElementById("quickDeath").innerHTML = String(세계현황[1].toLocaleString());
  document.getElementById("quickCured").innerHTML = String(세계현황[2].toLocaleString());

  document.getElementById("세계확진자").innerHTML = String(세계현황[0].toLocaleString());
  document.getElementById("세계사망자").innerHTML = String(세계현황[1].toLocaleString());
  document.getElementById("세계완치자").innerHTML = String(세계현황[2].toLocaleString());

  document.getElementById("update1").innerHTML = '<br><i class="fas fa-sync-alt"></i> '+ String(업데이트시간) +' 기준 (차이 : 전일 00시 대비)';
  document.getElementById("update2").innerHTML = '<br><i class="fas fa-sync-alt"></i> '+ String(업데이트시간) +' 기준 (차이 : 전일 00시 대비)';
  document.getElementById("update3").innerHTML = '<br><i class="fas fa-sync-alt"></i> '+ String(업데이트시간) +' 기준 (차이 : 전일 00시 대비)';

  // 세계순위현황 업데이트시간 텍스트
  document.getElementById("W_updateDate").innerHTML = '(업데이트 : '+year+'년 '+korMonth+' '+korDay+'일, '+korHour+':'+min+')';

  // 세계순위현황
  document.getElementById("w_name_1").innerHTML = '<b>' + String(세계확진자[0].Name) + '</b>';
  document.getElementById("w_infect_1").innerHTML = '<span style="color:#DA5672"> <b>' + String(세계확진자[0].확진자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_death_1").innerHTML = '<span style="color:#4C525D"> <b>' + String(세계확진자[0].사망자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_cured_1").innerHTML = '<span style="color:#4874C3"> <b>' + String(세계확진자[0].완치자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_rate_1").innerHTML = '<span style="color:#8F8F8F"> <b>' + String((세계확진자[0].사망자수 / 세계확진자[0].확진자수 * 100).toFixed(2)) + '%</b> </span> ';

  document.getElementById("w_name_2").innerHTML = '<b>' + String(세계확진자[1].Name) + '</b>';
  document.getElementById("w_infect_2").innerHTML = '<span style="color:#DA5672"> <b>' + String(세계확진자[1].확진자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_death_2").innerHTML = '<span style="color:#4C525D"> <b>' + String(세계확진자[1].사망자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_cured_2").innerHTML = '<span style="color:#4874C3"> <b>' + String(세계확진자[1].완치자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_rate_2").innerHTML = '<span style="color:#8F8F8F"> <b>' + String((세계확진자[1].사망자수 / 세계확진자[1].확진자수 * 100).toFixed(2)) + '%</b> </span> ';

  document.getElementById("w_name_3").innerHTML = '<b>' + String(세계확진자[2].Name) + '</b>';
  document.getElementById("w_infect_3").innerHTML = '<span style="color:#DA5672"> <b>' + String(세계확진자[2].확진자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_death_3").innerHTML = '<span style="color:#4C525D"> <b>' + String(세계확진자[2].사망자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_cured_3").innerHTML = '<span style="color:#4874C3"> <b>' + String(세계확진자[2].완치자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_rate_3").innerHTML = '<span style="color:#8F8F8F"> <b>' + String((세계확진자[2].사망자수 / 세계확진자[2].확진자수 * 100).toFixed(2)) + '%</b> </span> ';

  document.getElementById("w_name_4").innerHTML = '<b>' + String(세계확진자[3].Name) + '</b>';
  document.getElementById("w_infect_4").innerHTML = '<span style="color:#DA5672"> <b>' + String(세계확진자[3].확진자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_death_4").innerHTML = '<span style="color:#4C525D"> <b>' + String(세계확진자[3].사망자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_cured_4").innerHTML = '<span style="color:#4874C3"> <b>' + String(세계확진자[3].완치자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_rate_4").innerHTML = '<span style="color:#8F8F8F"> <b>' + String((세계확진자[3].사망자수 / 세계확진자[3].확진자수 * 100).toFixed(2)) + '%</b> </span> ';

  document.getElementById("w_name_5").innerHTML = '<b>' + String(세계확진자[4].Name) + '</b>';
  document.getElementById("w_infect_5").innerHTML = '<span style="color:#DA5672"> <b>' + String(세계확진자[4].확진자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_death_5").innerHTML = '<span style="color:#4C525D"> <b>' + String(세계확진자[4].사망자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_cured_5").innerHTML = '<span style="color:#4874C3"> <b>' + String(세계확진자[4].완치자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_rate_5").innerHTML = '<span style="color:#8F8F8F"> <b>' + String((세계확진자[4].사망자수 / 세계확진자[4].확진자수 * 100).toFixed(2)) + '%</b> </span> ';

  document.getElementById("w_name_6").innerHTML = '<b>' + String(세계확진자[5].Name) + '</b>';
  document.getElementById("w_infect_6").innerHTML = '<span style="color:#DA5672"> <b>' + String(세계확진자[5].확진자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_death_6").innerHTML = '<span style="color:#4C525D"> <b>' + String(세계확진자[5].사망자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_cured_6").innerHTML = '<span style="color:#4874C3"> <b>' + String(세계확진자[5].완치자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_rate_6").innerHTML = '<span style="color:#8F8F8F"> <b>' + String((세계확진자[5].사망자수 / 세계확진자[5].확진자수 * 100).toFixed(2)) + '%</b> </span> ';

  document.getElementById("w_name_7").innerHTML = '<b>' + String(세계확진자[6].Name) + '</b>';
  document.getElementById("w_infect_7").innerHTML = '<span style="color:#DA5672"> <b>' + String(세계확진자[6].확진자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_death_7").innerHTML = '<span style="color:#4C525D"> <b>' + String(세계확진자[6].사망자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_cured_7").innerHTML = '<span style="color:#4874C3"> <b>' + String(세계확진자[6].완치자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_rate_7").innerHTML = '<span style="color:#8F8F8F"> <b>' + String((세계확진자[6].사망자수 / 세계확진자[6].확진자수 * 100).toFixed(2)) + '%</b> </span> ';

  document.getElementById("w_name_8").innerHTML = '<b>' + String(세계확진자[7].Name) + '</b>';
  document.getElementById("w_infect_8").innerHTML = '<span style="color:#DA5672"> <b>' + String(세계확진자[7].확진자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_death_8").innerHTML = '<span style="color:#4C525D"> <b>' + String(세계확진자[7].사망자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_cured_8").innerHTML = '<span style="color:#4874C3"> <b>' + String(세계확진자[7].완치자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_rate_8").innerHTML = '<span style="color:#8F8F8F"> <b>' + String((세계확진자[7].사망자수 / 세계확진자[7].확진자수 * 100).toFixed(2)) + '%</b> </span> ';

  document.getElementById("w_name_9").innerHTML = '<b>' + String(세계확진자[8].Name) + '</b>';
  document.getElementById("w_infect_9").innerHTML = '<span style="color:#DA5672"> <b>' + String(세계확진자[8].확진자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_death_9").innerHTML = '<span style="color:#4C525D"> <b>' + String(세계확진자[8].사망자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_cured_9").innerHTML = '<span style="color:#4874C3"> <b>' + String(세계확진자[8].완치자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_rate_9").innerHTML = '<span style="color:#8F8F8F"> <b>' + String((세계확진자[8].사망자수 / 세계확진자[8].확진자수 * 100).toFixed(2)) + '%</b> </span> ';

  document.getElementById("w_name_10").innerHTML = '<b>' + String(세계확진자[9].Name) + '</b>';
  document.getElementById("w_infect_10").innerHTML = '<span style="color:#DA5672"> <b>' + String(세계확진자[9].확진자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_death_10").innerHTML = '<span style="color:#4C525D"> <b>' + String(세계확진자[9].사망자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_cured_10").innerHTML = '<span style="color:#4874C3"> <b>' + String(세계확진자[9].완치자수.toLocaleString()) + '</b> </span> ';
  document.getElementById("w_rate_10").innerHTML = '<span style="color:#8F8F8F"> <b>' + String((세계확진자[9].사망자수 / 세계확진자[9].확진자수 * 100).toFixed(2)) + '%</b> </span> ';

// 지역별 현황 hover 업데이트
$('#sKR-11').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[0].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[0].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[0].차이);
});
$('#sKR-26').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[1].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[1].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[1].차이);
});
$('#sKR-27').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[2].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[2].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[2].차이);
});
$('#sKR-28').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[3].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[3].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[3].차이);
});
$('#sKR-29').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[4].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[4].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[4].차이);
});
$('#sKR-30').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[5].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[5].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[5].차이);
});
$('#sKR-31').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[6].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[6].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[6].차이);
});
$('#sKR-50').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[7].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[7].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[7].차이);
});
$('#sKR-41').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[8].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[8].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[8].차이);
});
$('#sKR-42').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[9].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[9].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[9].차이);
});
$('#sKR-43').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[10].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[10].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[10].차이);
});
$('#sKR-44').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[11].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[11].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[11].차이);
});
$('#sKR-45').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[12].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[12].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[12].차이);
});
$('#sKR-46').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[13].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[13].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[13].차이);
});
$('#sKR-47').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[14].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[14].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[14].차이);
});
$('#sKR-48').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[15].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[15].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[15].차이);
});
$('#sKR-49').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[16].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[16].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[16].차이);
});


$('#KR-11').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[0].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[0].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[0].차이);
});
$('#KR-26').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[1].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[1].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[1].차이);
});
$('#KR-27').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[2].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[2].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[2].차이);
});
$('#KR-28').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[3].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[3].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[3].차이);
});
$('#KR-29').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[4].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[4].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[4].차이);
});
$('#KR-30').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[5].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[5].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[5].차이);
});
$('#KR-31').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[6].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[6].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[6].차이);
});
$('#KR-50').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[7].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[7].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[7].차이);
});
$('#KR-41').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[8].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[8].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[8].차이);
});
$('#KR-42').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[9].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[9].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[9].차이);
});
$('#KR-43').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[10].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[10].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[10].차이);
});
$('#KR-44').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[11].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[11].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[11].차이);
});
$('#KR-45').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[12].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[12].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[12].차이);
});
$('#KR-46').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[13].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[13].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[13].차이);
});
$('#KR-47').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[14].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[14].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[14].차이);
});
$('#KR-48').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[15].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[15].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[15].차이);
});
$('#KR-49').click(function(){
  $('#description').hide();
  document.getElementById("kr_name").innerHTML = String(맵_지역확진자[16].지역명);
  document.getElementById("kr_infect").innerHTML = String(맵_지역확진자[16].확진자)+"명";
  document.getElementById("kr_diff").innerHTML = String(맵_지역확진자[16].차이);
});



  // 테이블 접기
  var person1Cnt = 0;
  var person2Cnt = 0;
  var person3Cnt = 0;
  var person4Cnt = 0;
  var person5Cnt = 0;
  var person6Cnt = 0;
  var person7Cnt = 0;

  var L1Cnt = 0;
  var WcoronaCnt = 0;
  var KcoronaCnt = 0;
  var LcoronaCnt = 0;
  var GcoronaCnt = 0;
  var McoronaCnt = 0;

  // 지역별 현황 펼치기/접기
  $('#regionDiv').hide();
  $('#linkDiv').hide();
  $('#worldDiv').hide();
  $('#graphDiv').hide();

  $('#closeButton1').hide();
  $('#closeButton2').hide();
  $('#closeButton3').hide();
  $('#closeButton4').hide();
  $('#closeButton5').hide();
  $('#openButton6').hide();

  // 제목을 눌러도 오픈 : 전세계 코로나
  $('#MenuLink1').click(function () {
    if (L1Cnt == 0) {
      $('#innerMenu').slideDown();
      L1Cnt = 1;
    }
    else {
      $('#innerMenu').slideUp();
      L1Cnt = 0;
    }
  });

  // 제목을 눌러도 오픈 : 전세계 코로나
  $('#Wcorona').click(function () {
    if (WcoronaCnt == 0) {
      $('#worldDiv').slideDown();
      $('#closeButton4').show();
      $('#openButton4').hide();
      WcoronaCnt = 1;
    }
    else {
      $('#worldDiv').slideUp();
      $('#closeButton4').hide();
      $('#openButton4').show();
      WcoronaCnt = 0;
    }
  });

  // 제목을 눌러도 오픈 : 국내 지역별
  $('#Kcorona').click(function () {
    if (KcoronaCnt == 0) {
      $('#regionDiv').slideDown();
      $('#closeButton1').show();
      $('#openButton1').hide();
      KcoronaCnt = 1;
    }
    else {
      $('#regionDiv').slideUp();
      $('#closeButton1').hide();
      $('#openButton1').show();
      KcoronaCnt = 0;
    }
  });

  // 제목을 눌러도 오픈 : 각종 링크
  $('#Lcorona').click(function () {
    if (LcoronaCnt == 0) {
      $('#linkDiv').slideDown();
      $('#closeButton2').show();
      $('#openButton2').hide();
      LcoronaCnt = 1;
    }
    else {
      $('#linkDiv').slideUp();
      $('#closeButton2').hide();
      $('#openButton2').show();
      LcoronaCnt = 0;
    }
  });

  // 제목을 눌러도 오픈 : 추세선 그래프
  $('#Gcorona').click(function () {
    if (GcoronaCnt == 0) {
      $('#graphDiv').slideDown();
      $('#closeButton5').show();
      $('#openButton5').hide();
      GcoronaCnt = 1;
    }
    else {
      $('#graphDiv').slideUp();
      $('#closeButton5').hide();
      $('#openButton5').show();
      GcoronaCnt = 0;
    }
  });

  // 제목을 눌러도 오픈 : 경북대 지도 및 동선
  $('#Mcorona').click(function () {
    if (McoronaCnt == 0) {
      $('#mapDiv').slideUp();
      $('#closeButton6').hide();
      $('#openButton6').show();
      McoronaCnt = 1;
    }
    else {
      $('#mapDiv').slideDown();
      $('#closeButton6').show();
      $('#openButton6').hide();
      McoronaCnt = 0;
    }
  });

  // 지역별 현황
  $('#openButton1').click(function () {
    $('#regionDiv').slideDown();
    $('#closeButton1').show();
    $('#openButton1').hide();
  });

  $('#closeButton1').click(function () {
    $('#regionDiv').slideUp();
    $('#openButton1').show();
    $('#closeButton1').hide();
  });

  // 전 세계 현황 
  $('#openButton4').click(function () {
    $('#worldDiv').slideDown();
    $('#closeButton4').show();
    $('#openButton4').hide();
  });

  $('#closeButton4').click(function () {
    $('#worldDiv').slideUp();
    $('#openButton4').show();
    $('#closeButton4').hide();
  });

  // 추세선 그래프
  $('#openButton5').click(function () {
    $('#graphDiv').slideDown();
    $('#closeButton5').show();
    $('#openButton5').hide();
  });

  $('#closeButton5').click(function () {
    $('#graphDiv').slideUp();
    $('#openButton5').show();
    $('#closeButton5').hide();
  });

  // 지도 섹션
  $('#openButton6').click(function () {
    $('#mapDiv').slideDown();
    $('#closeButton6').show();
    $('#openButton6').hide();
    McoronaCnt = 0;
  });

  $('#closeButton6').click(function () {
    $('#mapDiv').slideUp();
    $('#openButton6').show();
    $('#closeButton6').hide();
    McoronaCnt = 1;
  });


  // 테이블 행 펼치기/접기
  $('.person1-content').hide();
  $('.person2-content').hide();
  $('.person3-content').hide();
  $('.person4-content').hide();
  $('.person5-content').hide();
  $('.person6-content').hide();
  $('.person7-content').hide();

  $('#person1Tr').click(function () {
    if (person1Cnt == 0) {
      person1Cnt = 1;
      $('#person1Tr').css("background-color", "#A9AED6");
      $('.person1-content').fadeIn(300);
    }
    else {
      person1Cnt = 0;
      $('#person1Tr').css("background-color", "#E6EDF0");
      $('.person1-content').hide();
    }
  });

  $('#person2Tr').click(function () {
    if (person2Cnt == 0) {
      person2Cnt = 1;
      $('#person2Tr').css("background-color", "#A9AED6");
      $('.person2-content').fadeIn(300);
    }
    else {
      person2Cnt = 0;
      $('#person2Tr').css("background-color", "#E6EDF0");
      $('.person2-content').hide();
    }
  });

  $('#person3Tr').click(function () {
    if (person3Cnt == 0) {
      person3Cnt = 1;
      $('#person3Tr').css("background-color", "#A9AED6");
      $('.person3-content').fadeIn(300);
    }
    else {
      person3Cnt = 0;
      $('#person3Tr').css("background-color", "#E6EDF0");
      $('.person3-content').hide();
    }
  });

  $('#person4Tr').click(function () {
    if (person4Cnt == 0) {
      person4Cnt = 1;
      $('#person4Tr').css("background-color", "#A9AED6");
      $('.person4-content').fadeIn(300);
    }
    else {
      person4Cnt = 0;
      $('#person4Tr').css("background-color", "#E6EDF0");
      $('.person4-content').hide();
    }
  });

  $('#person5Tr').click(function () {
    if (person5Cnt == 0) {
      person5Cnt = 1;
      $('#person5Tr').css("background-color", "#A9AED6");
      $('.person5-content').fadeIn(300);
    }
    else {
      person5Cnt = 0;
      $('#person5Tr').css("background-color", "#E6EDF0");
      $('.person5-content').hide();
    }
  });

  $('#person6Tr').click(function () {
    if (person6Cnt == 0) {
      person6Cnt = 1;
      $('#person6Tr').css("background-color", "#A9AED6");
      $('.person6-content').fadeIn(300);
    }
    else {
      person6Cnt = 0;
      $('#person6Tr').css("background-color", "#E6EDF0");
      $('.person6-content').hide();
    }
  });

  $('#person7Tr').click(function () {
    if (person7Cnt == 0) {
      person7Cnt = 1;
      $('#person7Tr').css("background-color", "#A9AED6");
      $('.person7-content').fadeIn(300);
    }
    else {
      person7Cnt = 0;
      $('#person7Tr').css("background-color", "#E6EDF0");
      $('.person7-content').hide();
    }
  });

  // 자동 스크롤 기능

  function Move1() {
    var offset = $(".nowData").offset();
    $('html, body').animate({ scrollTop: offset.top - 20 }, 400);
  }
  function Move2() {
    var offset = $("#Kcorona").offset();
    $('html, body').animate({ scrollTop: offset.top - 20 }, 400);
  }
  function Move3() {
    var offset = $("#Wcorona").offset();
    $('html, body').animate({ scrollTop: offset.top - 20 }, 400);
  }
  function Move4() {
    var offset = $("#Gcorona").offset();
    $('html, body').animate({ scrollTop: offset.top - 20 }, 400);
  }
  function Move5() {
    var offset = $("#Mcorona").offset();
    $('html, body').animate({ scrollTop: offset.top - 20 }, 400);
  }
  function Move6() {
    var offset = $(".path").offset();
    $('html, body').animate({ scrollTop: offset.top - 20 }, 400);
  }
  function Move7() {
    var offset = $("#linkContent").offset();
    $('html, body').animate({ scrollTop: offset.top - 20 }, 400);
  }

  
// 숫자 카운트 애니메이션 
  $('.infect').counterUp({
    delay: 10,
    time: 350
  });
  $('.cured').counterUp({
    delay: 10,
    time: 350
  });
  $('.death').counterUp({
    delay: 10,
    time: 350
  });

  // 공지사항 스크롤링
  
  var jsonLocation = 'result.json';
  var html = '';
  var count = 1;
  var idx = 1;
  var temp_data;
  var temp_href_data;

  $.getJSON(jsonLocation, function (data) {
    $.each(data, function (I, item) {     
      temp_data = I;     
      temp_href_data = item;
      count = count + 1;

      if(count>=12){
        document.getElementById("list"+idx).innerHTML = '<a href="https://knu.ac.kr'+ temp_href_data+'" target="_blank">' + temp_data +'</a>';
        idx++;
      }

      if(count >= 21)
        return false;
    });
  });


   // 뉴스기사 스크롤링
  
   var jsonLocation2 = 'news.json';
   var html = '';
   var count2 = 0;
   var idx2 = 1;
   var temp_data = 0;
   var temp_href_data = 0;
 
   $.getJSON(jsonLocation2, function (data) {
     $.each(data, function (I, item) {     
       temp_data = I;     
       temp_href_data = item;

       count2 = count2 + 1;
       document.getElementById("2list"+idx2).innerHTML = '<a href="'+temp_href_data+'" target="_blank">' + temp_data +'</a>';
       idx2++;
       
       if(count2 >= 11)
         return false;
     });
   });

    // button close
    function closePopup() {
      $('#tempPopup').css("box-shadow","none");
      $('#tempPopup').css("background-color","rgba(255,255,255,0)");
      $('#tempPopup').css("background-color","rgba(255,255,255,0)");
      document.getElementById('alertNotice').innerHTML = '&nbsp;';
      document.getElementById('alertNotice').onclick = null;
      $('#alertNotice').css("color","rgba(255,255,255,0)");
      $('#closePopupButton').hide();
    }