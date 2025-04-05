/* 
   - Plan này sẽ ở commit đầu tiên, lên kế hoạch triển khai app
   - Ứng viên có một chút giao tiếp khó khăn do tâm lí trong phỏng vấn, rất hi vọng những dòng cmt này thể hiện được phần nào năng lực
   - Trên thực tế, ứng viên có thể triển khai bài test này với react query table
   - Nhưng theo ứng viên, nó khó mà thể hiện được khả năng, khi mọi thứ đã có sẵn
   - Ở bài này, cũng sẽ không dùng redux toolkit, lí do:
     + Không/ít có state nào cần global, hay props không hề quá grill
     + chỉ có 1 màn hình, không cần thiết quá phức tạp
     + trên thực tế, có vài bài ứng viên từng làm tương tự dùng redux: https://github.com/TranDanh1122/rest_country_list
   - giải pháp đưa ra 1 cách đơn giản:
    + Dùng TailwindCSS + Shadcn UI hỗ trợ code code giao diện nhanh hơn
    + axios cho http call api (ở đây dùng dummyjson cho dễ)
    + dùng react query cho call api, dễ dàng cache, quản lí cache time, loading state dễ dàng
    + ứng viên đang phân vân nên dùng loader của router-dom entriesdata luôn hay để vẫn để state loading cho table trong lần đầu tiên load (sẽ chọn khi làm)
    + useReducer tách ra custom hook Phân Trang cho table
      * Action chuyển trang
      * Action chuyển số lượng xem (10, 20, 30) 
      * Sort action, ở đây cho sort theo name, tăng hoặc giảm
      * Filter sẽ cho search theo name, có triển khai debound (hook tự viết, không dùng thư viện)
    + 1 custom hook chuyển chế độ xem
      * Chế độ infinitiload sẽ triển khai react-window-infinatiload để tối ưu luôn dom
    + Viết thêm 1 context đơn giản để quản lí layout (dạng màn hình, co dãn màn hình)
    + Viết 1 context khác quản lí theme (dark, light mode)
    + sẽ viết 1 chút testing đơn giản cho thử thách này
*/
import { UserList, UserListContextProvider, ViewModeContextProvider } from '@/features/user'
import AppLayout from './layout/AppLayout'

function App() {

  return (
    <AppLayout>
      <ViewModeContextProvider>
        <UserListContextProvider>
          <UserList />
        </UserListContextProvider>
      </ViewModeContextProvider>
    </AppLayout>
  )
}

export default App
