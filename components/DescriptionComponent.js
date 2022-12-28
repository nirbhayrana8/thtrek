import DescriptionContentComponent from './DescriptionContentComponent';
import DescriptionContentContainer from './DescriptionComponentContainer';
import { DescriptionContextProvider  } from '../contexts/DescriptionContext';

export default function DescriptionComponent({ title, content, images, index }) {
	const data={title, content, images, index};

  return (
	<DescriptionContextProvider data={data}>
		<DescriptionContentContainer>
			<DescriptionContentComponent/>
		</DescriptionContentContainer>
	</DescriptionContextProvider>
  )
}
