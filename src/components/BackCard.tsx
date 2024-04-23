import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function PasswordForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>계정을 생성합니다</CardTitle>
        <CardDescription>필수 정보를 입력해볼게요.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">비밀번호</Label>
              <Input id="name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">비밀번호 확인</Label>
              <Input id="name" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex gap-5">
        <Button>계정 등록하기</Button>
        <Button variant="outline">이전 단계로</Button>
      </CardFooter>
    </Card>
  );
}
