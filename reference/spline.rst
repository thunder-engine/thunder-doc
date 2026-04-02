.. _api_Spline:

Spline
======

Inherited: None

.. _api_Spline_description:

Description
-----------



.. _api_Spline_public:

Public Methods
--------------

+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                    bool | :ref:`closed<api_Spline_450ac7b6>` () const                                       |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                    void | :ref:`insertPoint<api_Spline_3b467acd>` (int  index, const Spline::Point & point) |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|  :ref:`Spline::Point<api_Spline_Point>` | :ref:`point<api_Spline_fae69cb0>` (int  index) const                              |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                     int | :ref:`pointsCount<api_Spline_876d935a>` () const                                  |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                    void | :ref:`removePoint<api_Spline_6fb871ca>` (int  index)                              |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                    void | :ref:`setClosed<api_Spline_8bd0a6c4>` (bool  closed)                              |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|                                    void | :ref:`setPoint<api_Spline_5fe16a90>` (int  index, const Spline::Point & point)    |
+-----------------------------------------+-----------------------------------------------------------------------------------+
|             :ref:`Vector3<api_Vector3>` | :ref:`value<api_Spline_b83529e4>` (float  position)                               |
+-----------------------------------------+-----------------------------------------------------------------------------------+



.. _api_Spline_static:

Static Methods
--------------

None

.. _api_Spline_methods:

Methods Description
-------------------

.. _api_Spline_450ac7b6:

 bool **Spline::closed** () const

Returns true if is the spline is closed; otherwise false.

**See also** setClosed().

----

.. _api_Spline_3b467acd:

 void **Spline::insertPoint** (int  *index*, :ref:`Spline::Point<api_Spline_Point>` & *point*)

Inserts a *point* at the given index.

----

.. _api_Spline_fae69cb0:

 :ref:`Spline::Point<api_Spline::Point>`  **Spline::point** (int  *index*) const

Returns the point at the given index.

**See also** setPoint().

----

.. _api_Spline_876d935a:

 int **Spline::pointsCount** () const

Returns the number of points in the spline.

----

.. _api_Spline_6fb871ca:

 void **Spline::removePoint** (int  *index*)

Removes the point at the given index.

----

.. _api_Spline_8bd0a6c4:

 void **Spline::setClosed** (bool  *closed*)

Sets whether the spline is closed.

**See also** closed().

----

.. _api_Spline_5fe16a90:

 void **Spline::setPoint** (int  *index*, :ref:`Spline::Point<api_Spline_Point>` & *point*)

Sets the *point* at the given index.

**See also** point().

----

.. _api_Spline_b83529e4:

 :ref:`Vector3<api_Vector3>`  **Spline::value** (float  *position*)

Returns the value of the spline at the given normalized position.


