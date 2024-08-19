import CopyBtn from "@/components/CopyBtn";

const Page = ({
  params,
}: {
  params: {
    projectId: string;
  };
}) => {
  if (!params.projectId) return <div>Invalid Project ID</div>;
  if (!process.env.WIDGET_URL) return <div>Missing Widget URL</div>;
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2">Start collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground">
        Embed the code in your site
      </p>
      <div className="bg-zinc-300 rounded-md p-6 mt-4 relative">
        <code className="  text-black">
          {`<my-widget project="${params.projectId}"></my-widget>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
        <CopyBtn
          text={`<my-widget project="${params.projectId}"></my-widget> \n
      
          <script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        />
      </div>
    </div>
  );
};

export default Page;
