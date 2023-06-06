import AdminBlock from '../admins/adminCommon/components/AdminBlock';
import AdminSideBar from '../admins/adminCommon/components/AdminSideBar';
import Header from '../admins/adminCommon/components/Header';
import SearchBar from '../admins/adminCommon/components/SearchBar';
import { REPORT_BUTTON } from '../admins/adminCommon/constants/sideBarCategory';
import { AdminMainContainer } from '../admins/adminCommon/styledComponents/adminMainContainer';
import AdminTable from '../admins/adminReport/components/AdminTable';

const AdminReportPage = () => {
  return (
    <>
      <Header />
      <AdminBlock>
        <AdminSideBar nowCategoryName={REPORT_BUTTON} />
        <AdminMainContainer>
          <SearchBar />
          <AdminTable />
        </AdminMainContainer>
      </AdminBlock>
    </>
  );
};

export default AdminReportPage;
