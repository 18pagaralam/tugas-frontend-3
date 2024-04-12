import Props from "../Components/Props";
import Menu from "../Components/Menu";
import Navbar from "../Components/Navbar";
import Layout from "../Components/Layout";

const IndukProps = () => {
  const meja = 1;
  const makanan = "gorengan panas";
  const minuman = "es teh anget";
  const pesanan = { makanan: "pelasan", minuman: "es jeruk", pelanggan: true };
  const pesanan2 = {
    makanan: "pelasan",
    minuman: "es jeruk",
    pelanggan: false,
  };
  const pesanan3 = { makanan: "pecelan", minuman: "es dawet", pelanggan: true };
  const menuMakanan = ["nasi goreng", "soto", "pelasan"];
  const menuMinuman = ["es jeruk", "kopi", "es campur"];

  return (
    <>
    <Layout>
      <Navbar/>
      <h1 className="text-3xl font-bold underline">Induk Props</h1>
      <Menu menuMakanan={menuMakanan} menuMinuman={menuMinuman} />
      <Props pesanan={pesanan} />
      <hr />
      <Props pesanan={pesanan2} />
      <hr />
      <Props pesanan={pesanan3} />
    </Layout>
      {/*<Props 
                meja={meja} 
                makanan={makanan}
                minuman={minuman}
                pelanggan = {true}
            />
            <hr />
            <Props
            meja="2"
            makanan="soto lamongan"
            minuman="teh tarik"
            pelanggan = {false}
    />*/}
      <hr />
      {/*<Props pesan="pesan dari induk ke-1" />
            <Props pesan="pesan dari induk ke-2" />
            <Props pesan="pesan dari induk ke-3" />*/}
    </>
  );
};

export default IndukProps;
