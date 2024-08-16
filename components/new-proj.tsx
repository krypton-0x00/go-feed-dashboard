import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { SquarePlus } from "lucide-react";
import createProject from "@/actions/createProject";

const NewProjBtn = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          {" "}
          <SquarePlus className="mr-2 w-5" /> Create Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rouneded-md">
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
          <DialogDescription>
            Create a new project to get started.
          </DialogDescription>
        </DialogHeader>
        <form className="flex gap-4 flex-col" action={createProject}>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Project Name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="url">URL</Label>
              <Input id="url" name="url" placeholder="https://example.com" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Description (optional)"
            />
          </div>

          <Button type="submit">Create Project</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default NewProjBtn;
