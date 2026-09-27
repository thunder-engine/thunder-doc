.. _api_Spline:

Spline
======

Inherited: :ref:`Component<api_Component>`

.. _api_Spline_description:

Description
-----------



.. _api_Spline_public:

Public Methods
--------------

+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                    bool | :ref:`closed<api_Spline_8d2eb5a4>` () const                                       |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                    void | :ref:`insertPoint<api_Spline_4fbe682c>` (int  index, const Spline::Point & point) |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|  :ref:`Spline::Point<api_Spline_Point>` | :ref:`point<api_Spline_ac204f53>` (int  index) const                              |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                     int | :ref:`pointsCount<api_Spline_9ce57348>` () const                                  |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                    void | :ref:`removePoint<api_Spline_98e1756a>` (int  index)                              |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                    void | :ref:`setClosed<api_Spline_cfa91627>` (bool  closed)                              |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                    void | :ref:`setPoint<api_Spline_530bf1a7>` (int  index, const Spline::Point & point)    |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|             :ref:`Vector3<api_Vector3>` | :ref:`value<api_Spline_2f83d0cb>` (float  position)                               |
+-----------------------------------------+-----------------------------------------------------------------------------------+



.. _api_Spline_static:

Static Methods
--------------

None

.. _api_Spline_methods:

Methods Description
-------------------

.. _api_Spline_8d2eb5a4:

 bool **Spline::closed** () const

Returns true if is the spline is closed; otherwise false.

**See also** setClosed().

----

.. _api_Spline_4fbe682c:

 void **Spline::insertPoint** (int  *index*, :ref:`Spline::Point<api_Spline_Point>` & *point*)

Inserts a *point* at the given index.

----

.. _api_Spline_ac204f53:

 :ref:`Spline::Point<api_Spline::Point>`  **Spline::point** (int  *index*) const

Returns the point at the given index.

**See also** setPoint().

----

.. _api_Spline_9ce57348:

 int **Spline::pointsCount** () const

Returns the number of points in the spline.

----

.. _api_Spline_98e1756a:

 void **Spline::removePoint** (int  *index*)

Removes the point at the given index.

----

.. _api_Spline_cfa91627:

 void **Spline::setClosed** (bool  *closed*)

Sets whether the spline is closed.

**See also** closed().

----

.. _api_Spline_530bf1a7:

 void **Spline::setPoint** (int  *index*, :ref:`Spline::Point<api_Spline_Point>` & *point*)

Sets the *point* at the given index.

**See also** point().

----

.. _api_Spline_2f83d0cb:

 :ref:`Vector3<api_Vector3>`  **Spline::value** (float  *position*)

Returns the value of the spline at the given normalized position.


