#!/usr/bin/env python

# -*- coding: utf8 -*-
from app import app, socketio
socketio.run(app, host='0.0.0.0')
