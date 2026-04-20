/** @jsx m */
import m from "mithril";
import { FileUpload } from "mithril-ui-kit";

let files: File[] = [];

export function setup(el: HTMLElement): void {
	m.mount(el, {
		view() {
			return (
				<FileUpload.Root
					multiple={true}
					accept=".json,.csv"
					files={files}
					onFilesChange={(nextFiles) => {
						files = nextFiles;
						m.redraw();
					}}
				>
					<FileUpload.Label>Upload recipe files</FileUpload.Label>
					<FileUpload.Dropzone>
						<FileUpload.DropzoneContent>
							Drag and drop files here, or click to browse.
						</FileUpload.DropzoneContent>
					</FileUpload.Dropzone>
					<FileUpload.Trigger>Select files</FileUpload.Trigger>
					<FileUpload.ItemGroup />
				</FileUpload.Root>
			);
		},
	});
}