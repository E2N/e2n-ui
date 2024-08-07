import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../Button';
import { Input } from '../Input';
import { Label } from '../Label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from './Sheet';
import { faArrowLeft, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Tabs } from '../Tab';
import { TabsContent, TabsList, TabsTrigger } from '../Tab/Tab';
import { Card } from '../Card';

export default {
  title: 'Components/Sheet',
  component: Sheet,
};

export const Default = {
  render: () => {
    return (
      <Sheet>
        <SheetTrigger>
          <span className="bg-blue-200 p-2">Open </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    );
  },
};

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export const Side = {
  render: () => {
    return (
      <div className="grid gap-2">
        {SHEET_SIDES.map((side) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-1/5">
                {side}
              </Button>
            </SheetTrigger>
            <SheetContent side={side}>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    );
  },
};

export const ComplexSheet = {
  render: () => {
    return (
      <Sheet>
        <SheetTrigger>
          <button className="bg-blue-600 rounded-lg p-2">
            <FontAwesomeIcon
              icon={faEdit}
              className="text-white"
              size="lg"
              fixedWidth
            />
          </button>
        </SheetTrigger>
        <SheetContent className="p-0 sm:max-w-[700px]" removeCloseIcon>
          <SheetHeader className="bg-gray-100 mb-5 p-4">
            <SheetTitle>
              <div className="flex flex-row">
                <div>
                  <FontAwesomeIcon
                    className="text-blue-500 me-2"
                    icon={faArrowLeft}
                    size="sm"
                    fixedWidth
                  />
                  <span className="text-sm text-slate-600">
                    Arbeitszeiten bearbeiten
                  </span>
                </div>
                <div className="ml-auto">
                  <span className="text-sm text-slate-600">
                    Letzte Änderungen am 23.08.2024
                  </span>
                </div>
              </div>
              <hr className="h-px my-2 bg-gray-400 border-0 -mx-4" />

              <div className="grid">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-left py-2 -my-2 border-r-2 h-8 border-gray-400 pr-4 text-sm">
                    Name
                  </Label>
                  <Label className="text-left py-2 border-r-2 h-8 border-gray-400 pr-4 text-sm">
                    Datum
                  </Label>
                  <Label className="text-left py-2 border-r-2 h-8 border-gray-400 pr-4 text-sm">
                    Arbeitsbereich
                  </Label>
                  <Label className="text-left py-2 h-8 text-sm">
                    Arbeitszeit
                  </Label>
                </div>
              </div>
            </SheetTitle>
          </SheetHeader>
          <Tabs defaultValue="item1" className="w-[700px] ms-2">
            <TabsList className="bg-blue-200 text-blue-600">
              <TabsTrigger value="item1">Item 1</TabsTrigger>
              <TabsTrigger value="item2">Item 2</TabsTrigger>
              <TabsTrigger value="item3">Item 3</TabsTrigger>
            </TabsList>
            <TabsContent value="item1">
              <div className="flex flex-row justify-between py-10 px-8">
                <div>
                  <Card
                    className="bg-grey-300"
                    header="Das ist eine Überschrift"
                    content={<div>Das hier ist Content.</div>}></Card>
                </div>

                <div className="grid bg-gray-100 rounded-lg shadow-lg p-6">
                  <div className="grid grid-cols-3 items-center gap-5">
                    <div className="text-left text-sm">
                      <div className="text-slate-600 font-semibold mb-1">
                        Beginn
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-2">
                        <div className="p-1">09:00</div>
                      </div>
                    </div>
                    <div className="text-left text-sm">
                      <div className="text-slate-600 font-semibold mb-1">
                        Kommen
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-2">
                        <div className="p-1">--:--</div>
                      </div>
                    </div>

                    <div className="text-left text-sm ">
                      <div className="text-slate-600 font-semibold mb-1">
                        Ende
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-2">
                        <div className="p-1">17:00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="item2">Test content 2</TabsContent>
            <TabsContent value="item3">Test content 3</TabsContent>
          </Tabs>

          <SheetFooter>
            <SheetClose asChild>
              <div className="p-10 ">
                <Button type="submit" className="font-semibold">
                  Save changes
                </Button>
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );
  },
};
