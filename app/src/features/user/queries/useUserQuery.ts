import { AxiosClient } from '@/axios'
import { useQuery } from '@tanstack/react-query'
import { TUser } from '@/features/user'
//API này không hỗ trợ tốt paginate cùng filter (chỉ có thể paginate hoặc filter tại 1 thời điểm), nên ở đây lấy hết và xử lý ở client
//Dữ liệu ít, đa phần thiết bị người dùng đều có thể đáp ứng, có thể lưu trên ram, không cần lưu xuống indexDB tránh quá phức tạp
interface TUserResponse {
    users: TUser[],
    total: number
}
export const useGetUserQuery = () => useQuery({
    queryKey: ['users'],
    queryFn: async (): Promise<TUserResponse> => {
        const response = await AxiosClient.get("/user?limit=200")
        const data = response.data
        const formatedUser: TUser[] = data.users.map((el: any) => {
            return {
                id: el.id,
                name: el.firstName + " " + el.lastName,
                balance: el.height + el.weight,
                email: el.email,
                registerAt: new Date(el.birthDate),
                active: Math.random() > 0.5
            }
        })
        return { users: formatedUser, total: data.total }
    },
    refetchOnWindowFocus: true, // fetch lại khi focus tab, sau khi hết staleTime
    staleTime: 5 * 60 * 1000, //  5 phút
    gcTime: 10 * 60 * 1000
})