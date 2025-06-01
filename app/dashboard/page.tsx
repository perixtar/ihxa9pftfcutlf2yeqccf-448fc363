import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DashboardPage() {
  return (
    <div className='flex-1 space-y-4 p-8 pt-6'>
      <div className='flex items-center justify-between space-y-2'>
        <h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
      </div>
      
      <Tabs defaultValue='overview' className='space-y-4'>
        <TabsList>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='analytics'>Analytics</TabsTrigger>
          <TabsTrigger value='reports'>Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value='overview' className='space-y-4'>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>0</div>
                <p className='text-xs text-muted-foreground'>
                  +0% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>Active Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>0</div>
                <p className='text-xs text-muted-foreground'>
                  +0% from last hour
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>$0</div>
                <p className='text-xs text-muted-foreground'>
                  +0% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>0</div>
                <p className='text-xs text-muted-foreground'>
                  +0 since last week
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
            <Card className='col-span-4'>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className='pl-2'>
                <div className='h-[200px] flex items-center justify-center text-muted-foreground'>
                  Chart placeholder
                </div>
              </CardContent>
            </Card>
            
            <Card className='col-span-3'>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-8'>
                  <div className='flex items-center'>
                    <div className='ml-4 space-y-1'>
                      <p className='text-sm font-medium leading-none'>No recent activity</p>
                      <p className='text-sm text-muted-foreground'>
                        Check back later for updates
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value='analytics' className='space-y-4'>
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='h-[400px] flex items-center justify-center text-muted-foreground'>
                Analytics content coming soon
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value='reports' className='space-y-4'>
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='h-[400px] flex items-center justify-center text-muted-foreground'>
                Reports content coming soon
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}