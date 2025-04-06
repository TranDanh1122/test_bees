import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RegisterDate, TUser } from "@/features/user";
import { Badge } from "@/components/ui/badge";
import { Delete, Edit, Ellipsis } from "lucide-react";
import { LayoutContext } from "@/context";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button";

interface Props {
    user: TUser
}
export default React.memo(function UserListItem({ user }: Props): React.JSX.Element {
    const { layout } = React.useContext(LayoutContext)
    return (
        <Card>
            <CardHeader className="flex justify-between relative">
                <div className={`flex flex-grow ${layout.screen == "mobile" && "flex-col"} gap-3 items-center overflow-hidden`}>
                    <Avatar>
                        <AvatarImage loading="lazy" src={user.image} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <CardTitle className={`space-x-2 ${layout.screen == "mobile" && "flex flex-col items-center gap-3"}`}>
                            <span className="text-sm md:text-base">{user.name}</span>
                            {
                                user.active &&
                                <Badge variant="outline" className="border-blue-500 text-blue-500">
                                    Active
                                </Badge>
                            }
                            {
                                !user.active &&
                                <Badge variant="outline" className="border-red-500 text-red-500" >
                                    Inactive
                                </Badge>
                            }

                        </CardTitle>
                        <CardDescription className=" text-ellipsis">{user.email}</CardDescription>
                    </div>
                </div>
                <Popover>
                    <PopoverTrigger asChild>
                        <Ellipsis className={`${layout.screen == "mobile" && "absolute top-0 right-3"}`} />
                    </PopoverTrigger>
                    <PopoverContent className="w-fit">
                        <div className="flex gap-2 py-1 items-center text-blue-500">
                            <Edit className="size-5" />
                            Edit
                        </div>
                        <div className="flex gap-2  py-1 items-center text-red-500">
                            <Delete className="size-5" />
                            Delete
                        </div>
                    </PopoverContent>
                </Popover>
            </CardHeader>
            <CardContent>
                <p>Regiser At : <RegisterDate date={user.registerAt} /></p>
            </CardContent>
        </Card>
    )
})