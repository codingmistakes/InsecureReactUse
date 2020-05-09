import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
            <footer className="border-top footer text-muted">
                <div className="container">
                    <div class="row">
                        <div class="col-6">
                            Coding Mistakes Hackers Abuse &copy;
                        </div>
                        <div class="col-6 text-right">
                            github.com/codingmistakes
                        </div>
                    </div>
                </div>
            </footer>
      </div>
    );
  }
}
