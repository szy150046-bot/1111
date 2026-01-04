import svgPaths from "./svg-md082v3cfn";
import img202601041133431 from "figma:asset/70a21daa1823f18dff46602a2cc5352073ea9261.png";
import img202601041133432 from "figma:asset/c69b8f200ef4017430453df92277fa62963d37ae.png";
import imgHeading4 from "figma:asset/3a0c519645d4a340826dddbb549a358e73c6220e.png";
import imgPage00011 from "figma:asset/f7c4af678842f068d637f9f45dd883523103ba0e.png";
import imgLink from "figma:asset/b3a5b52f360d597bb44fa9558d5c886d81158b87.png";
import imgRectangle from "figma:asset/fd152bebda653aef6a89d4547f15f3b82a2c8c07.png";

function Background() {
  return (
    <div className="absolute bg-[#f1f1f1] h-[36px] left-0 right-0 top-0" data-name="Background">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[14px] justify-center leading-[0] left-[370px] not-italic text-[#d94840] text-[12px] top-[18px] translate-y-[-50%] w-[734.566px]">
        <p className="leading-[36px]">通知：学信网元旦放假安排为2026年1月1日-1月3日，其间停止办理咨询等业务，网站正常运行。2026年1月4日正常办公。祝您新年快乐！</p>
      </div>
    </div>
  );
}

function Image() {
  return <div className="absolute h-[109px] left-[370px] top-0 w-[104px]" data-name="Image" />;
}

function Heading() {
  return (
    <div className="absolute h-[55px] left-[474px] top-[37px] w-[660px]" data-name="Heading 2">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-0 not-italic text-[#889098] text-[14px] top-[39.75px] translate-y-[-50%] w-[616.32px]">
        <p className="leading-[30px]">教育部学历查询网站、教育部高校招生阳光工程指定网站、全国硕士研究生招生报名和调剂指定网站</p>
      </div>
      <div className="absolute h-[50px] left-[-3px] top-[-29px] w-[433px]" data-name="截屏2026-01-04 11.33.43 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202601041133431} />
      </div>
    </div>
  );
}

function Input() {
  return <div className="absolute bg-white border border-[#d4d9d7] border-solid h-[30px] left-0 rounded-[4px] top-0 w-[180px]" data-name="Input" />;
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <path d="M20 0H0V20H20V0Z" fill="var(--fill-0, #626F69)" id="Vector" opacity="0" />
          <path d={svgPaths.p32d0cb00} fill="var(--fill-0, #626F69)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group />
    </div>
  );
}

function IconSearchSvg() {
  return (
    <div className="absolute left-1/2 overflow-clip size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="icon-search.svg">
      <Group1 />
    </div>
  );
}

function IconSearchSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[20px] top-0" data-name="icon-search.svg fill">
      <IconSearchSvg />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute right-[7px] size-[20px] top-[5px]" data-name="Button">
      <IconSearchSvgFill />
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[30px] left-[1175.3px] top-[63px] w-[180px]" data-name="Form">
      <Input />
      <Button />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bottom-[16px] left-[1386.41px] top-[63px] w-[28px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-0 not-italic text-[#889098] text-[14px] top-[14.75px] translate-y-[-50%] w-[28.369px]">
        <p className="leading-[30px]">注册</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bottom-[16px] left-[1445.52px] top-[63px] w-[28px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-0 not-italic text-[#889098] text-[14px] top-[14.75px] translate-y-[-50%] w-[28.369px]">
        <p className="leading-[30px]">登录</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute bottom-[16px] left-[1504.63px] top-[63px] w-[45.38px]" data-name="Link">
      <div className="absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-0 not-italic text-[#889098] text-[14px] top-[14.75px] translate-y-[-50%] w-[45.719px]">
        <p className="leading-[30px]">English</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-white h-[109px] left-0 right-0 top-[36px]" data-name="Background">
      <Image />
      <Heading />
      <Form />
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[30px] justify-center leading-[0] left-[1355.3px] not-italic text-[#e6e6e6] text-[14px] top-[78px] translate-y-[-50%] w-[31.498px]">
        <p className="leading-[30px]">{`　|　`}</p>
      </div>
      <Link />
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[30px] justify-center leading-[0] left-[1414.41px] not-italic text-[#e6e6e6] text-[14px] top-[78px] translate-y-[-50%] w-[31.498px]">
        <p className="leading-[30px]">{`　|　`}</p>
      </div>
      <Link1 />
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[30px] justify-center leading-[0] left-[1473.52px] not-italic text-[#e6e6e6] text-[14px] top-[78px] translate-y-[-50%] w-[31.498px]">
        <p className="leading-[30px]">{`　|　`}</p>
      </div>
      <Link2 />
      <div className="absolute h-[83px] left-[333px] top-[18px] w-[137px]" data-name="截屏2026-01-04 11.33.43 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img202601041133432} />
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="absolute h-[50px] left-0 right-[1126px] top-0" data-name="Item → Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[11px] not-italic text-[16px] text-white top-[24.75px] translate-y-[-50%] w-[32.394px]">
        <p className="leading-[50px]">首页</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="absolute h-[50px] left-[54px] right-[1040px] top-0" data-name="Item → Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[11px] not-italic text-[16px] text-white top-[24.75px] translate-y-[-50%] w-[64.397px]">
        <p className="leading-[50px]">学籍查询</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="absolute h-[50px] left-[140px] right-[954px] top-0" data-name="Item → Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[11px] not-italic text-[16px] text-white top-[24.75px] translate-y-[-50%] w-[64.397px]">
        <p className="leading-[50px]">学历查询</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="absolute h-[50px] left-[226px] right-[868px] top-0" data-name="Item → Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[11px] not-italic text-[16px] text-white top-[24.75px] translate-y-[-50%] w-[64.397px]">
        <p className="leading-[50px]">学位查询</p>
      </div>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="absolute h-[50px] left-[312px] right-[782px] top-0" data-name="Item → Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[11px] not-italic text-[16px] text-white top-[24.75px] translate-y-[-50%] w-[64.397px]">
        <p className="leading-[50px]">在线验证</p>
      </div>
    </div>
  );
}

function ItemLink5() {
  return (
    <div className="absolute h-[50px] left-[398px] right-[600px] top-0" data-name="Item → Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[11px] not-italic text-[16px] text-white top-[24.75px] translate-y-[-50%] w-[160.324px]">
        <p className="leading-[50px]">出国教育背景信息服务</p>
      </div>
    </div>
  );
}

function ItemLink6() {
  return (
    <div className="absolute h-[50px] left-[580px] right-[514px] top-0" data-name="Item → Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[11px] not-italic text-[16px] text-white top-[24.75px] translate-y-[-50%] w-[64.397px]">
        <p className="leading-[50px]">图像校对</p>
      </div>
    </div>
  );
}

function ItemLink7() {
  return (
    <div className="absolute h-[50px] left-[666px] right-[428px] top-0" data-name="Item → Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[11px] not-italic text-[16px] text-white top-[24.75px] translate-y-[-50%] w-[64.397px]">
        <p className="leading-[50px]">学信档案</p>
      </div>
    </div>
  );
}

function ItemLink8() {
  return (
    <div className="absolute h-[50px] left-[752px] right-[374px] top-0" data-name="Item → Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[11px] not-italic text-[16px] text-white top-[24.75px] translate-y-[-50%] w-[32.394px]">
        <p className="leading-[50px]">高考</p>
      </div>
    </div>
  );
}

function ItemLink9() {
  return (
    <div className="absolute h-[50px] left-[806px] right-[320px] top-0" data-name="Item → Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[11px] not-italic text-[16px] text-white top-[24.75px] translate-y-[-50%] w-[32.394px]">
        <p className="leading-[50px]">研招</p>
      </div>
    </div>
  );
}

function ItemLink10() {
  return (
    <div className="absolute h-[50px] left-[860px] right-[218px] top-0" data-name="Item → Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[11px] not-italic text-[16px] text-white top-[24.75px] translate-y-[-50%] w-[80.323px]">
        <p className="leading-[50px]">港澳台招生</p>
      </div>
    </div>
  );
}

function ItemLink11() {
  return (
    <div className="absolute h-[50px] left-[962px] right-[164px] top-0" data-name="Item → Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[11px] not-italic text-[16px] text-white top-[24.75px] translate-y-[-50%] w-[32.394px]">
        <p className="leading-[50px]">征兵</p>
      </div>
    </div>
  );
}

function ItemLink12() {
  return (
    <div className="absolute h-[50px] left-[1016px] right-[110px] top-0" data-name="Item → Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[11px] not-italic text-[16px] text-white top-[24.75px] translate-y-[-50%] w-[32.394px]">
        <p className="leading-[50px]">就业</p>
      </div>
    </div>
  );
}

function ItemLink13() {
  return (
    <div className="absolute h-[50px] left-[1070px] right-[24px] top-0" data-name="Item → Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[11px] not-italic text-[16px] text-white top-[24.75px] translate-y-[-50%] w-[64.397px]">
        <p className="leading-[50px]">学职平台</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute h-[0.01px] left-1/2 top-0 translate-x-[-50%] w-[1180px]" data-name="List">
      <ItemLink />
      <ItemLink1 />
      <ItemLink2 />
      <ItemLink3 />
      <ItemLink4 />
      <ItemLink5 />
      <ItemLink6 />
      <ItemLink7 />
      <ItemLink8 />
      <ItemLink9 />
      <ItemLink10 />
      <ItemLink11 />
      <ItemLink12 />
      <ItemLink13 />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#00bac7] h-[50px] left-0 overflow-clip right-0 top-[145px]" data-name="Background">
      <List />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[66px] left-0 right-[16px] top-0" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[60.5px] justify-center leading-[22px] left-0 not-italic text-[#2a3839] text-[14px] top-[32.75px] translate-y-[-50%] w-[196.2px]">
        <p className="mb-0">关于调整学籍/学历/学位在线验</p>
        <p className="mb-0">证报告翻译件和学位认证报告翻</p>
        <p>译件的说明</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[88px] left-[20px] right-0 top-[54px]" data-name="List → Item">
      <Link3 />
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[22px] justify-center leading-[0] left-0 not-italic text-[#889098] text-[14px] top-[77px] translate-y-[-50%] w-[81.365px]">
        <p className="leading-[22px]">2023-05-18</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[194px] left-[370px] right-[1310px] top-[732px]" data-name="Container">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18px] justify-center leading-[0] left-[20px] not-italic text-[#889098] text-[18px] top-[25px] translate-y-[-50%] w-[72.311px]">
        <p className="leading-[18px]">重要告知</p>
      </div>
      <ListItem />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute border-[#e6e6e6] border-[0px_0px_1px] border-solid h-[55px] left-0 right-0 top-[73px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[22px] not-italic text-[#2a3839] text-[16px] top-[26.75px] translate-y-[-50%] w-[96.348px]">
        <p className="leading-[28px]">验证报告简介</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute border-[#e6e6e6] border-[0px_0px_1px] border-solid h-[55px] left-0 right-0 top-[128px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[22px] not-italic text-[#2a3839] text-[16px] top-[26.75px] translate-y-[-50%] w-[64.397px]">
        <p className="leading-[28px]">防伪措施</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute border-[#e6e6e6] border-[0px_0px_1px] border-solid h-[55px] left-0 right-0 top-[183px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[22px] not-italic text-[#2a3839] text-[16px] top-[26.75px] translate-y-[-50%] w-[64.397px]">
        <p className="leading-[28px]">验证真伪</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute border-[#e6e6e6] border-[0px_0px_1px] border-solid h-[55px] left-0 right-0 top-[238px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[22px] not-italic text-[#2a3839] text-[16px] top-[26.75px] translate-y-[-50%] w-[80.323px]">
        <p className="leading-[28px]">特点和用途</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute border-[#e6e6e6] border-[0px_0px_1px] border-solid h-[55px] left-0 right-0 top-[293px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[22px] not-italic text-[#2a3839] text-[16px] top-[26.75px] translate-y-[-50%] w-[64.397px]">
        <p className="leading-[28px]">如何申请</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute border-[#e6e6e6] border-[0px_0px_1px] border-solid h-[55px] left-0 right-0 top-[348px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[22px] not-italic text-[#2a3839] text-[16px] top-[26.75px] translate-y-[-50%] w-[64.397px]">
        <p className="leading-[28px]">如何使用</p>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute border-[#e6e6e6] border-[0px_0px_1px] border-solid h-[55px] left-0 right-0 top-[403px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[22px] not-italic text-[#2a3839] text-[16px] top-[26.75px] translate-y-[-50%] w-[112.373px]">
        <p className="leading-[28px]">延长验证有效期</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute border-[#e6e6e6] border-[0px_0px_1px] border-solid h-[55px] left-0 right-0 top-[458px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[22px] not-italic text-[#2a3839] text-[16px] top-[26.75px] translate-y-[-50%] w-[64.397px]">
        <p className="leading-[28px]">特别声明</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute bg-[#fafbfb] border-[#e6e6e6] border-[0px_0px_1px] border-solid h-[55px] left-0 right-0 top-[18px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[18.5px] justify-center leading-[0] left-[22px] not-italic text-[#00bac7] text-[16px] top-[26.75px] translate-y-[-50%] w-[64.397px]">
        <p className="leading-[28px]">在线验证</p>
      </div>
      <div className="absolute bg-[#00bac7] bottom-0 right-0 top-0 w-[5px]" data-name="Background" />
    </div>
  );
}

function List1() {
  return (
    <div className="absolute bg-white h-[537px] left-[370px] top-[195px] w-[240px]" data-name="List">
      <Link4 />
      <Link5 />
      <Link6 />
      <Link7 />
      <Link8 />
      <Link9 />
      <Link10 />
      <Link11 />
      <Link12 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[40px] left-[640px] right-[370px] top-[232px]" data-name="Heading 4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[62.5%] left-0 max-w-none top-[37.5%] w-[14.29%]" src={imgHeading4} />
      </div>
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[28px] justify-center leading-[0] left-0 not-italic text-[#2a3839] text-[24px] top-[15px] translate-y-[-50%] w-[360.132px]">
        <p className="leading-[30px]">学籍/学历/学位在线验证报告查询</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute bg-[#eff8f9] h-[28px] left-[1267.55px] rounded-[4px] top-[235px] w-[48px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-[calc(50%+0.18px)] not-italic text-[#00bac7] text-[14px] text-center top-[14.75px] translate-x-[-50%] translate-y-[-50%] w-[28.369px]">
        <p className="leading-[30px]">中文</p>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute h-[30px] left-[1325px] top-[235px] w-[48px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-[10px] not-italic text-[#889098] text-[14px] top-[14.75px] translate-y-[-50%] w-[28.369px]">
        <p className="leading-[30px]">英文</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[1103.952px] left-[705px] top-[302px] w-[780px]">
      <div className="absolute h-[1103.952px] left-0 top-0 w-[780px]" data-name="教育部学籍在线验证报告_邵泽宇_page-0001 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPage00011} />
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute left-[1413px] size-[20px] top-[239px]" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[205%] left-0 max-w-none top-0 w-[415%]" src={imgLink} />
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute h-[20px] left-[1453px] top-[239px] w-[19px]" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[205%] left-[-110.53%] max-w-none top-0 w-[436.84%]" src={imgLink} />
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute left-[1492px] size-[20px] top-[239px]" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[205%] left-[-210%] max-w-none top-0 w-[415%]" src={imgLink} />
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="absolute h-[21px] left-[1532px] top-[239px] w-[18px]" data-name="Link">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[195.24%] left-[-355.56%] max-w-none top-[4.76%] w-[461.11%]" src={imgLink} />
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div className="absolute h-[16.5px] left-[calc(50%-428.59px)] top-[29.5px] translate-x-[-50%] w-[56px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[8.25px] translate-x-[-50%] translate-y-[-50%] w-[56.372px]">
        <p className="leading-[30px]">中心简介</p>
      </div>
    </div>
  );
}

function Link20() {
  return (
    <div className="absolute h-[16.5px] left-[calc(50%-326.7px)] top-[29.5px] translate-x-[-50%] w-[56px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[8.25px] translate-x-[-50%] translate-y-[-50%] w-[56.372px]">
        <p className="leading-[30px]">网站简介</p>
      </div>
    </div>
  );
}

function Link21() {
  return (
    <div className="absolute h-[16.5px] left-[calc(50%-224.8px)] top-[29.5px] translate-x-[-50%] w-[56px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[8.25px] translate-x-[-50%] translate-y-[-50%] w-[56.372px]">
        <p className="leading-[30px]">版权声明</p>
      </div>
    </div>
  );
}

function Link22() {
  return (
    <div className="absolute h-[16.5px] left-[calc(50%-122.9px)] top-[29.5px] translate-x-[-50%] w-[56px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[8.25px] translate-x-[-50%] translate-y-[-50%] w-[56.372px]">
        <p className="leading-[30px]">网站宣传</p>
      </div>
    </div>
  );
}

function Link23() {
  return (
    <div className="absolute h-[16.5px] left-[calc(50%-21px)] top-[29.5px] translate-x-[-50%] w-[56px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[8.25px] translate-x-[-50%] translate-y-[-50%] w-[56.372px]">
        <p className="leading-[30px]">联系我们</p>
      </div>
    </div>
  );
}

function Link24() {
  return (
    <div className="absolute h-[16.5px] left-[calc(50%+80.9px)] top-[29.5px] translate-x-[-50%] w-[56px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[8.25px] translate-x-[-50%] translate-y-[-50%] w-[56.372px]">
        <p className="leading-[30px]">招聘信息</p>
      </div>
    </div>
  );
}

function Link25() {
  return (
    <div className="absolute h-[16.5px] left-[calc(50%+182.8px)] top-[29.5px] translate-x-[-50%] w-[56px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-[calc(50%+0.19px)] not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[8.25px] translate-x-[-50%] translate-y-[-50%] w-[56.372px]">
        <p className="leading-[30px]">帮助中心</p>
      </div>
    </div>
  );
}

function Link26() {
  return (
    <div className="absolute h-[16.5px] left-[calc(50%+291.7px)] top-[29.5px] translate-x-[-50%] w-[70px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-[calc(50%+0.15px)] not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[8.25px] translate-x-[-50%] translate-y-[-50%] w-[70.308px]">
        <p className="leading-[30px]">学信十周年</p>
      </div>
    </div>
  );
}

function Link27() {
  return (
    <div className="absolute h-[16.5px] left-[calc(50%+393.59px)] top-[29.5px] translate-x-[-50%] w-[42px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-[calc(50%+0.16px)] not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[8.25px] translate-x-[-50%] translate-y-[-50%] w-[42.328px]">
        <p className="leading-[30px]">大事记</p>
      </div>
    </div>
  );
}

function Link28() {
  return (
    <div className="absolute h-[16.5px] left-[853.49px] top-[73.5px] w-[196px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] top-[8.25px] translate-y-[-50%] w-[196.352px]">
        <p className="leading-[30px]">教育部学生服务与素质发展中心</p>
      </div>
    </div>
  );
}

function Link29() {
  return (
    <div className="absolute h-[16.5px] left-[935.54px] top-[103.5px] w-[42px]" data-name="Link">
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] top-[8.25px] translate-y-[-50%] w-[42.328px]">
        <p className="leading-[30px]">学信网</p>
      </div>
    </div>
  );
}

function Link30() {
  return (
    <div className="absolute h-[16.5px] left-[1183.54px] top-[73.5px] w-[140.31px]" data-name="Link">
      <div className="absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] top-[8.25px] translate-y-[-50%] w-[140.619px]">
        <p className="leading-[30px]">京ICP备19004913号-1</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <path d="M20 0H0V20H20V0Z" fill="var(--fill-0, white)" id="Vector" opacity="0" />
      </svg>
      <div className="absolute inset-[0_3.73%]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgRectangle} />
      </div>
    </div>
  );
}

function JgwabSvg() {
  return (
    <div className="absolute left-1/2 overflow-clip size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="jgwab.svg">
      <Group2 />
    </div>
  );
}

function JgwabSvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[20px] top-0" data-name="jgwab.svg fill">
      <JgwabSvg />
    </div>
  );
}

function JgwabSvg1() {
  return (
    <div className="absolute left-0 overflow-clip size-[20px] top-[-1.12px]" data-name="jgwab.svg">
      <JgwabSvgFill />
    </div>
  );
}

function Link31() {
  return (
    <div className="absolute h-[16.5px] left-[1183.54px] top-[103.5px] w-[216.88px]" data-name="Link">
      <JgwabSvg1 />
      <div className="absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-[20px] not-italic text-[14px] text-[rgba(255,255,255,0.6)] top-[8.25px] translate-y-[-50%] w-[197.233px]">
        <p className="leading-[30px]">{` 京公网安备11010202009747号`}</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#403e3f] h-[150px] left-0 right-0 top-[1456px]" data-name="Background">
      <Link19 />
      <Link20 />
      <Link21 />
      <Link22 />
      <Link23 />
      <Link24 />
      <Link25 />
      <Link26 />
      <Link27 />
      <div className="absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[46.5px] justify-center leading-[30px] left-[519.59px] not-italic text-[14px] text-[rgba(255,255,255,0.6)] top-[96.75px] translate-y-[-50%] w-[184.1px]">
        <p className="mb-0">客服热线：010-67410388</p>
        <p>客服邮箱：kefu@chsi.com.cn</p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.4)] h-[46px] right-[1176.51px] top-[74px] w-px" data-name="Vertical Divider" />
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-[783.49px] not-italic text-[14px] text-[rgba(255,255,255,0.6)] top-[81.75px] translate-y-[-50%] w-[70.308px]">
        <p className="leading-[30px]">主办单位：</p>
      </div>
      <Link28 />
      <div className="absolute flex flex-col font-['Helvetica_Neue:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-[783.49px] not-italic text-[14px] text-[rgba(255,255,255,0.6)] top-[111.75px] translate-y-[-50%] w-[152.368px]">
        <p className="leading-[30px]">{`Copyright © 2003-2026 `}</p>
      </div>
      <Link29 />
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[16.5px] justify-center leading-[0] left-[977.54px] not-italic text-[14px] text-[rgba(255,255,255,0.6)] top-[111.75px] translate-y-[-50%] w-[130.887px]">
        <p className="leading-[30px]">{` All Rights Reserved`}</p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.4)] h-[46px] right-[776.46px] top-[74px] w-px" data-name="Vertical Divider" />
      <Link30 />
      <Link31 />
    </div>
  );
}

export default function Component1920WDefault() {
  return (
    <div className="bg-white relative size-full" data-name="1920w default">
      <Background />
      <Background1 />
      <Background2 />
      <Container />
      <List1 />
      <Heading1 />
      <div className="absolute flex flex-col font-['PingFang_SC:Regular',sans-serif] h-[28px] justify-center leading-[0] left-[1194.09px] not-italic text-[#2a3839] text-[16px] top-[249px] translate-y-[-50%] w-[68.755px]">
        <p className="leading-[28px]">{`报告语种 `}</p>
      </div>
      <Link13 />
      <Link14 />
      <div className="absolute bg-[#e6e6e6] h-[20px] right-[527px] top-[240px] w-px" data-name="Vertical Divider" />
      <Frame />
      <div className="absolute bg-[#e6e6e6] bottom-0 left-[610px] top-[195px] w-px" data-name="Vertical Divider" />
      <Link15 />
      <Link16 />
      <Link17 />
      <Link18 />
      <Background3 />
    </div>
  );
}