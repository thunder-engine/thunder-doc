.. _api_Event:
Event Class
================

Inherited: None

.. _api_Event_description:
Description
-----------

The Event class is the base calss for all event classes.

Objects processing events by their virtual Object::event() function called. This function can be reimplemented in subclasses to add additional event handling or change existing.

Base Event contain only event type parameter. Subclasses of Event may contain additional parameters to describe particular events.



.. _api_Event_public:
Public Methods
--------------

+---------------------+-------------------------------------------+
|                     | :ref:`Event<api_Event_Event>` (int  type) |
+---------------------+-------------------------------------------+
|                     | :ref:`~Event<api_Event_~Event>` ()        |
+---------------------+-------------------------------------------+
| :ref:`int<api_int>` | :ref:`type<api_Event_type>` () const      |
+---------------------+-------------------------------------------+

.. _api_Event_static:
Static Methods
--------------

None

.. _api_Event_methods:
Methods Description
-------------------

.. _api_Event_Event:

**Event::Event** (:ref:`int<api_int>`  *type*)

Constructs an Event with *type* of event.

----

.. _api_Event_~Event:

**Event::~Event** ()

Destroys the instance of Event. The destructor is virtual.

----

.. _api_Event_type:

:ref:`int<api_int>`  **Event::type** () const

Returns type of event.

----


